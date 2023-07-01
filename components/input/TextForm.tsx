import { Form, InputOption, INPUT_TYPES } from "@/lib/constants/InputType";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "../btn/IconButton";

type Props = {
  form: Form;
};

export default function TextForm({ form }: Props) {
  useEffect(() => {
    put();
  }, [form]);

  /**
   * 변수 세팅
   */
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);
  const { method, action, inputs, option = {} } = form;
  let col: number = option.column ? option.column : 1;
  let row: number = option.row ? option.row : 0;
  let title: string = option.title ? option.title : "";
  let submitText: string = option.submitText ? option.submitText : "저장";
  let setRefresh: boolean = !!option.setRefresh;
  // end

  /** form className 설정*/
  let className = `grid grid-cols-${col} gap-y-2`;

  if (row) className += ` grid-rows-${row}`;
  if (col > 1) {
    className += col > 4 ? "gap-x-1" : `gap-x-${5 - col}`;
  }
  // end

  /**
   * 기존 객체 값 지정(hide 나 disabled 값을 보존하기 위함)
   */
  const orgObject: {
    [key: string]: string | undefined;
  } = {};

  form.inputs.forEach((input) => {
    orgObject[input.id] =
      input.option && input.option.value ? input.option.value : "";
  });

  // end

  /** inputs className 설정 */
  const getClassInput = (o: InputOption = {}) => {
    let cn = "";

    cn += o.column ? `col-span-${o.column}` : `col-span-1`;
    cn += o.row ? ` row-span-${o.row}` : ` row-span-1`;

    return cn;
  };

  const inputsClass =
    "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none";

  // end

  /**
   * submit 누를 시 이벤트
   */
  const submit = () => {
    let result: {
      [key: string]: string | undefined;
    } = Object.assign({}, orgObject);

    inputRefs.current.forEach(({ id, value }) => {
      result[id] = value;
    });
  };
  // end

  /**
   * refresh 버튼 메서드
   */
  const refresh = () => {
    if (!confirm("새로고침시 내용이 초기화 됩니다. 정말 새로고침 할까요?"))
      return;
    put();
  };

  const put = () => {
    inputRefs.current.forEach((elem) => {
      const v: string = orgObject[elem.id] + "";
      elem.value = v === "undefined" ? "" : v;
    });
  };
  //end
  return (
    <div>
      {title ? (
        <div>
          <div className="text-lg flex justify-between">
            <span>{title}</span>
            {setRefresh ? (
              <div
                onClick={() => {
                  refresh();
                }}
              >
                <IconButton>
                  <span className="text-blue-400">↺</span>
                </IconButton>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <hr className="mt-1 mb-3" />
        </div>
      ) : (
        <></>
      )}
      <div className={className}>
        {inputs.map(({ id, type, option = {} }, idx) => {
          if (option.hide) return;

          return (
            <div key={`input-${idx}`} className={getClassInput(option)}>
              {option.title && (
                <label
                  htmlFor={id}
                  className="block mb-1 text-gray-500 text-sm"
                >
                  {option.title}
                </label>
              )}
              {type === INPUT_TYPES.TEXT_AREA ? (
                <textarea
                  rows={option.rows}
                  defaultValue={option.value}
                  id={id}
                  className={inputsClass}
                  ref={(el) => (inputRefs.current[idx] = el!)}
                  disabled={option.disabled}
                ></textarea>
              ) : (
                <input
                  type="text"
                  defaultValue={option.value}
                  id={id}
                  className={inputsClass}
                  ref={(el) => (inputRefs.current[idx] = el!)}
                  disabled={option.disabled}
                  placeholder={option.placeholder}
                ></input>
              )}
            </div>
          );
        })}
        <button
          className="bg-blue-500 rounded font-bold w-20 px-1 py-2 text-xs text-white tracking-widest"
          onClick={() => submit()}
        >
          {submitText ? submitText : "저 장"}
        </button>
      </div>
    </div>
  );
}
