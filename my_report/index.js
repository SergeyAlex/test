	const Axios = require('axios')
  module.exports.m_today = async () => {

	let server_url = 'http://***********/'
	let today = new Date();
	let yesterday = new Date();
	yesterday.setDate(yesterday.getDate()-1);
	end_date = today.toISOString().slice(0, 10);
	start_date = yesterday.toISOString().slice(0, 10);
	let url = server_url+'statbyiddate/'+start_date+'/'+end_date+'/'+ null+'/'+null+'/'+null;
	console.log(start_date)
	console.log(end_date)
	console.log(url)

  let res = await Axios.get(url)
				.then((response) => {
			//		console.log(response.data)
				return response.data
				})
				.catch(error => console.log(error))		
	//	console.log(res)
  return res
}
 
