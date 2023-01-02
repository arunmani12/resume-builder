import React from 'react'
import temp from './template.module.css'
import { useNavigate } from "react-router-dom";

const Template = ({setcurrentTmp}:{setcurrentTmp:React.Dispatch<React.SetStateAction<number>>}) => {

    var data = ["./tmp2.jpg", './tmp1.jpg']

    const navToResume = (i:number) =>{
        setcurrentTmp(i)
        navigate('/resume')
    }

    const navigate = useNavigate();

    return (
        <div className={temp.temp} style={{flexDirection:'column'}}>
            <h1>Templates</h1>
            <div className={temp.temp} style={{width:'100%'}}>
            {
                data.map((d,i) =>
                    <div key={d} onClick={()=>navToResume(i)} className={temp.imgcontainer}>
                        <img src={d}></img>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Template