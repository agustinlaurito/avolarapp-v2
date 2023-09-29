import { Icon } from "@chakra-ui/react";
import { WiCloud, WiStrongWind , WiDaySunny , WiNightClear, WiDayCloudy, WiDayStormShowers, WiDayShowers, WiDaySnow, WiRain} from "react-icons/wi";
function WeatherIcon ({ metar, props }){

	const data = metar.parsed;

	if(!data) return;

	if(data.cavok === true){
		if(data.wind.speedKt > 10){
			return <Icon as={WiStrongWind} {...props} />;
		}
		if(data.time.hour < 9 || data.time.hour > 21){
			return <Icon as={WiNightClear} {...props} />;
		}
		return <Icon as={WiDaySunny} {...props} />;
	}
	if(data.clouds.length === 1){
		return <Icon as={WiDayCloudy} {...props} />;
	}
	if(data.clouds.length > 1){
		return <Icon as={WiCloud} {...props} />;
	}

	data.weather.forEach(element => {
		if(element.codes.includes("TS")){
			return <Icon as={WiDayStormShowers} {...props} />;
		}
		if(element.codes.includes("SH")){
			return <Icon as={WiDayShowers} {...props} />;
		}
		if(element.codes.includes("SN")){
			return <Icon as={WiDaySnow} {...props} />;
		}
		if(element.codes.includes("RA")){
			return <Icon as={WiDayShowers} {...props} />;
		}
		if(element.codes.includes("DZ")){
			return <Icon as={WiRain} {...props} />;
		}
	});


	return <Icon as={WiDaySunny} {...props} />;
}

export default WeatherIcon;
