import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../../redux/Actions";
import axios from 'axios'
import sizeValidations from "./sizeValidations";
import "../createColor/createColor.css"

const CreateSize = ()=>{
    const dispatch = useDispatch();
    const series = useSelector((state)=> state.sizesList);
    let [count, setCount] = useState(0)
    useEffect(()=>{
        dispatch(getSeries());
    },[count]);

    let [ createSize, setCreateSize ] = useState({
        name: "",
    });
    const [errors, setErrors] = useState({
        disableButton: true
    });

    const handleChange = (event)=>{
        setCreateSize({...createSize, [event.target.name]: event.target.value});
        setErrors(
            sizeValidations({...createSize, [event.target.name]: event.target.value})
        );
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!createSize.name){
            alert('Debes llenar el nombre');
        }else{
            try {
                await axios.post('/products/size', createSize);
                setCount(count + 1);
                alert('talle creada existosamente');
                setCreateSize({
                    name:"",
                });
                setErrors({
                    disableButton: true
                });
            } catch (error) {
                setErrors({error: `El talle ${createSize.name} ya esta creado`});
            };
        };
    };

    return (
        <div className="create-main-containerX">
            <div className="create-containerX">
                <form onSubmit={handleSubmit} className="create-formX">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={createSize.name}
                        required
                        placeholder="Nombre"
                        className="custom-inputX"
                        onChange={handleChange}
                    />
                    <p className="error">{errors.name}</p>
                    <button type="submit" className="submit-buttonzX" disabled={Object.keys(errors).length === 0 ? false : true}>Crear</button>
                    <p className="error">{errors.error}</p>
                    <h2>Series Creadas:</h2>
                    <ol>
                        {series.map((size)=>(
                            <li>{size.name}</li>
                        ))}
                    </ol>
                </form>
            </div>
        </div>
    );
};

export default CreateSize;