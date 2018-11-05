import axios from "axios"
import jsonp from "jsonp"

export const getBanner = function(){
	const bannerUrl = "http://127.0.0.1:3000/banner"
	return new Promise((res,rej)=>{
		axios.get(bannerUrl).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	}) 
}

export const getData = (url)=>{
	const dataUrl = "http://127.0.0.1:3000/data";
	return new Promise((res,rej)=>{
		axios.get(dataUrl,{params:{url}}).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}

export const getBrandData = (url) =>{
	const dataUrl = "http://127.0.0.1:3000/brandData";
	return new Promise((res,rej)=>{
		axios.get(dataUrl,{params:{url}}).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}

export const getSeckillData = ()=>{
	const dataUrl = "http://127.0.0.1:3000/seckillData";
	return new Promise((res,rej)=>{
		axios.get(dataUrl).then((data)=>{
			res(data)
		}).catch((err)=>{
			rej(err)
		})
	})
}

export const getCateData = () =>{
	const dataUrl = "https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1540540349595&callback=jsonp1";
	return new Promise((res,rej)=>{
		jsonp(dataUrl,function(err,data){
			res(data)
		})
	})
	
}

