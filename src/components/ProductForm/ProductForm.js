import React from "react";
import { useState } from "react";

const InputForm = (props)=>{
    const [formData, setFormData] = useState({
        'id':'',
        'title':'',
        'price':'',
        'amount':''
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      };

      
};