// import { useState } from "react";

import { useState } from "react";

// function HOC(OriginalComponent) {

//     function newComponent() {
//         let [count, setCount] = useState(0)
//         let handleCount = () => {
//             setCount(count + 1)
//         }
//         return <OriginalComponent count={count} handleCount={handleCount}/>
//     }
//     return newComponent;
// }
// export default HOC;



function CommonFun(OriginalComp) {
    function newComp() {
        let [money, setMoney] = useState(20);
        let handleMoney = () => {
            setMoney(money * 2)
        }
        return <OriginalComp money={money} handleMoney={handleMoney}/>
    }
    return newComp;
}
export default CommonFun;