import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/Actions";
import axios from 'axios'
import categoryValidations from "./categoryValidations";
import "../Create.css"

const CreateCategory = ()=>{
    const dispatch = useDispatch();
    const categories = useSelector((state)=> state.categories);
    useEffect(()=>{
        dispatch(getCategories());
    },[categories.length]);

    let [ createCategory, setCreateCategory ] = useState({
        name: ""
    });
    const [errors, setErrors] = useState({
        disableButton: true
    });

    const handleChange = (event)=>{
        setCreateCategory({...createCategory, [event.target.name]: event.target.value});
        setErrors(
            categoryValidations({...createCategory, [event.target.name]: event.target.value})
        );
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!createCategory.name){
            alert('Debes llenar el nombre');
        }else{
            try {
                const asyncFunction = async()=>{
                    await axios.post('/products/category', createCategory);
                    alert('categoria creada existosamente');
                    setCreateCategory({
                        name:""
                    });
                    setErrors({
                        disableButton: true
                    });
                };
                asyncFunction();
            } catch (error) {
                alert(error.message);
                console.log(error.message)
            }
        };
    };

    return (
        <div className="create-main-container">
            <div className="create-container">
                <form onSubmit={handleSubmit} className="create-form">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={createCategory.name}
                        required
                        placeholder="Nombre"
                        className="custom-input"
                        onChange={handleChange}
                    />
                    <p className="error">{errors.name}</p>
                    <button type="submit" disabled={Object.keys(errors).length === 0 ? false : true}>Crear</button>
                    <h2>Categorias Creadas:</h2>
                    <ol>
                        {categories.map((category)=>(
                            <li>{category.name}</li>
                        ))}
                    </ol>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;