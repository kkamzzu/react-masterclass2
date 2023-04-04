import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";



interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>
}

export default Chart; 
