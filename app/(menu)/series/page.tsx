import ListPageWrapper from "@/components/form/list/page/ListPageWrapper";
import {getSeriesList} from "@/lib/api/Series.api";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {Page} from "@/types/form";
import Series from "@/lib/classes/domain/series/Series.class";
import SeriesListFormHeaders from "@/lib/form/series/list/SeriesListFormHeaders";
import SeriesListFormOption from "@/lib/form/series/list/SeriesListFormOption";

export default async function RootSeries({
 searchParams
}: {
  searchParams: Params;
}) {

  const data = await getSeriesList(searchParams.page || "1") as Page<Series>;


  return <ListPageWrapper
      data={data}
        header={SeriesListFormHeaders}
      option={SeriesListFormOption}
  />
;
}
