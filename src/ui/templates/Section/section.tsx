"use client";
import { Footer, Header } from "@/ui/layouts";
import "./sectionStyles.scss";
import { Modal } from "@/ui/organisms";
import { FormField, FormTextArea, SelectField } from "@/ui/molecules";
import { IVacantAddRequest } from "@/app/core/application/dto/vacant/vacantRequest";
import { Button } from "@/ui/atoms";
import { useEffect, useState } from "react";


export default function Section({children}: {children: React.ReactNode}):React.ReactNode{

    const initialFormData: IVacantAddRequest = {
        title: "",
        description: "",
        status: "",
        companyId: "0"
    }

    const [formData, setFormData] = useState<IVacantAddRequest>(initialFormData);
    const [selectValue, setSelectValue] = useState<string>("");
    const [selectValueCompanyId, setSelectValueCompanyId] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void =>{
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleCreate = ():void =>{
        if(!formData.title || !formData.description)return;
        console.log(formData);
        console.log(selectValue);
        console.log(selectValueCompanyId);
    }

    useEffect(()=>(
        setFormData({
            ...formData,
            status: selectValue,
            companyId: selectValueCompanyId
        })

    ), [selectValue, setSelectValueCompanyId])
    return(
        <div className="template">
            <Header
                title="Company Management"
            />
            <main className="main">
                {children}
                <Modal title="Add Vacant">
                    <form className="form">
                        <FormField
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={(e)=>handleChange(e)}
                            error={!formData.title}
                        />
                        <FormTextArea
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={(e)=>handleChange(e)}
                            placeholder="Enter the description..."
                            error={!formData.description}
                        />
                        <SelectField
                            label="Status"
                            name="status"
                            value={selectValue}
                            options={["OPEN", "CLOSED"]}
                            valueDefault="select status"
                            setValue={setSelectValue}
                        />
                        <SelectField
                            label="Companies"
                            name="companyId"
                            value={selectValueCompanyId}
                            options={["techCorp", "Company"]}
                            valueDefault="select Company"
                            setValue={setSelectValueCompanyId}
                        />
                        <Button onClick={handleCreate}
                            type="button"
                            text="Add"
                            className="buttonModal"
                        />
                    </form>
                </Modal>
            </main>
            <Footer />
        </div>
    )
}