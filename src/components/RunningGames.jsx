import CustomizeableButton from "@/components/CustomizeableButton";
import GamesContainerTable from "@/components/GamesContainerTable";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getMatches } from "@/api/matches";
import { DateTime, Interval } from "luxon";

export default function RunningGames() {
  const [matches,setMatches]= useState([])
  const handleGetMatches = async()=>{
    try{
      const list = await getMatches()

      const filteredList = list.filter((item)=>{
        const date =DateTime.fromISO(item?.match_time)
        const now = DateTime.local()
        const duration =Interval.fromDateTimes(now, date).length('milliseconds')

        return date.toFormat('d') === now.toFormat('d') && duration 
      })
      if( filteredList.length ) setMatches(filteredList)
    }
    catch(err){
        alert('error occured', err)
    }
  }

  useEffect(()=>{
    handleGetMatches()
  },[])

  return (
    <div className="space-y-8 p-10 px-12">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold text-gray-600">Running Games</h3>
        <div className="flex gap-3">
          <CustomizeableButton
            icon={<CiFilter />}
            label="Filter"
            onClick={() => console.log("Data Filtered")}
          />
        </div>
      </div>

      <div className="bg-white">
        <GamesContainerTable data={matches??[]} rowsPerPage={10} />
      </div>
    </div>
  );
}
