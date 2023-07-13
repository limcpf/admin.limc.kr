import ListPageWrapper from "@/components/form/list/page/ListPageWrapper";
import { getSeriesList } from "@/lib/api/Series.server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Page } from "@/types/form";
import Series from "@/lib/classes/domain/series/Series.class";
import SeriesListHeaders from "@/lib/form/series/list/SeriesListHeaders";
import SeriesListOption from "@/lib/form/series/list/SeriesListOption";

export default async function RootSeries({
  searchParams,
}: {
  searchParams: Params;
}) {
  const data = (await getSeriesList(searchParams.page || "1")) as Page<Series>;

  return (
    <ListPageWrapper
      data={data}
      header={SeriesListHeaders}
      option={SeriesListOption}
    />
  );
}
