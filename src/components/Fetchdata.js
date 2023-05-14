import React, {useState, useEffect} from 'react'
import Histogram from './Histogram';

  const Fetchdata = () => {
    const [fetchedText, setFetchedText] = useState('');
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.terriblytinytales.com/test.txt');
        const data = await response.text();
        setFetchedText(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    
    const words = fetchedText.split(/\W+/);
    const wordFrequencies = {};

    words.forEach(word =>{
      if(word in wordFrequencies){
        wordFrequencies[word].num++;
      }
      else{
        wordFrequencies[word] = {name:word , num:1}
      }
    })
    const dataEntries = Object.values(wordFrequencies)

    dataEntries.sort((a,b)=> b.num - a.num)

    const topOccurrences = dataEntries.slice(0,20)

    function convertToCSV(data){
      const csvRows = [];
      const header = Object.keys(data[0])
      csvRows.push(header.join(","))

      for(const entry of data){
        const values = header.map(header => entry[header])
        csvRows.push(values.join(','))
      }
      return csvRows.join('\n')
    }

    function downloadCSV(csvData){
      const blob = new Blob([csvData], {type:'text/csv'})
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url;
      link.download = 'word_frequencies.csv'
      link.click();
    }
    const onClickDownload = ()=>{
      const csvData = convertToCSV(topOccurrences)
      downloadCSV(csvData)
    }
   
  
    

  return (
    <>
    <div>
      
    <div>{console.log(topOccurrences)}</div>

    <Histogram passed={topOccurrences}/>
    
  </div>
  <div>
  <center><button  type="button" class="btn btn-primary btn-lg" onClick={onClickDownload}>Export CSV</button></center>
  </div>
  </>
  )
}

export default Fetchdata