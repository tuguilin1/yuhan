import axios from "axios"

export const getBanner = function(){
	const bannerUrl = "http://localhost:3000/banner"
	return new Promise((res,rej)=>{
		axios.get(bannerUrl).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	}) 
}

export const getData = (url)=>{
	const dataUrl = "http://localhost:3000/data";
	return new Promise((res,rej)=>{
		axios.get(dataUrl,{params:{url}}).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}

export const getBrandData = (url) =>{
	const dataUrl = "http://localhost:3000/brandData";
	return new Promise((res,rej)=>{
		axios.get(dataUrl,{params:{url}}).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}

export const getSeckillData = ()=>{
	const dataUrl = "http://localhost:3000/seckillData";
	return new Promise((res,rej)=>{
		axios.get(dataUrl).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}


