/*
 * @Description: 
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-10-20 10:13:19
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2023-10-23 14:36:00
 */
import { useFBX } from '@tresjs/cientos';

export const loadCityFBX = async()=>{
  const path = './plugins/digitalCity/model/shanghai.FBX';
	const model = await useFBX(path);
	let CITY_UNTRIANGULATED = null
	let LANDMASS = null
	model.traverse((child) => {
		if (child.name === 'CITY_UNTRIANGULATED') {
			CITY_UNTRIANGULATED = child
		}
		if (child.name === 'LANDMASS') {
			LANDMASS = child
		}
	})
	return {
		model,
		city:CITY_UNTRIANGULATED,
		land:LANDMASS
	}
}