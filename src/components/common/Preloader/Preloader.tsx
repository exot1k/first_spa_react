import loader from "../../../Assets/Images/loadbar.gif";
import React, {FC} from "react";

type propsType = {

}

let Preloader: FC<propsType> = (props) => {
    return <div><img src={loader}/> </div>
}
export default Preloader