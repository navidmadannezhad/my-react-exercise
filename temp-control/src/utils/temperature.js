const temp_colors = {
    under_50: "#8c97b1",
    under_25: "#617ab7",
    under_10: "#3b60ba",
    zero: "#b6cbff",
    above_10: "#fadbd2",
    above_25: "#ffa085",
    above_50: "#ff744c",
    above_100: "#ff4c18",
}

const temperature_color = temp_value => {
    switch(true){
        case temp_value <= -50:
            return temp_colors.under_50;
            break;
        case temp_value > -50 && temp_value <= -25:
            return temp_colors.under_25;
            break;
        case temp_value > -25 && temp_value <= -10:
            return temp_colors.under_10;
            break;
        case temp_value > -10 && temp_value <= 10:
            return temp_colors.zero;
            break;
        case temp_value > 10 && temp_value <= 25:
            return temp_colors.above_10;
            break;
        case temp_value > 25 && temp_value <= 50:
            return temp_colors.above_25;
            break;
        case temp_value > 50 && temp_value <= 100:
            return temp_colors.above_50;
            break; 
        default:
            return temp_colors.above_100;
            break; 
    }
}

export default temperature_color;