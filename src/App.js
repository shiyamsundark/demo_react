//import {useState} from 'react';
import React from 'react';
import './App.css';

const App = () => {
//   const [data, setData] = useState({data: []});
// //  const [isLoading,setIsLoading] = useState(false);
// //  const [err,setErr] = useState('');
//   let userasd = {
//   	ref: 'master'
// 	};


  const handleClick = async () => {
	  console.log("handleclick")
	  let jsondata = JSON.stringify({
      	ref: 'master',
    	});

    let methodtype = 'POST';
	 fetch('https://api.github.com/repos/Malavika1113/react-workflow-gh-actions/actions/workflows/Reuseable-A.yml/dispatches', {
      method: methodtype,
      headers: {
	   'Accept': 'application/vnd.github+json',
	   'Authorization': `Bearer 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`,
	   'X-GitHub-Api-Version': '2022-11-28',
	   'Access-Control-Allow-Origin': 'https://malavika1113.github.io/',
      },
      body: jsondata,
    })
      .then((responseData) => responseData.json())
      .then(async (responseJson) => {
       console.log('handle inside');
      })
      .catch((error) => {
        console.log('error inside');
      });

//     try {
//       const response = await fetch(`https://api.github.com/repos/Malavika1113/react-workflow-gh-actions/actions/workflows/Reuseable-A.yml/dispatches`, {
//         Method: 'POST',
// 		Headers: {
// 			'Accept': 'application/vnd.github+json',
// 			'Authorization': `Bearer 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`,
// 			'X-GitHub-Api-Version': '2022-11-28',
// 			'Content-Type': 'application/json;charset=utf-8'
// 			},
// 		Body: JSON.stringify(userasd)
//       });

//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       console.log('result is: ', JSON.stringify(result, null, 4));

//       setData(result);
//     } catch (err) {
//       //setErr(err.message);
//     } finally {
//       //setIsLoading(false);
//     }
  };

//  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Ext Form
        </p>
        <form>
         <div className="input-container">
           <label>Release Version </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Model Type </label>
           <input type="text" name="pass" required />
         </div>
         <button onClick={handleClick}>BUILD</button>
        </form>
      </header>
    </div>
  );
};

export default App;
