import { createElement,Fragment,FC,ReactNode } from "react";
interface ConditionProps {
    match: boolean | number | string| ReactNode,
    children?: ReactNode 
}
const Condition = ({match,children}:ConditionProps) => {
    if(match){
        return createElement(Fragment,{},children)
    }
    return null
}

export default Condition