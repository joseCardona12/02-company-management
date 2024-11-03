"use client";
import { Footer, Header } from "@/ui/layouts";
import { useState } from "react";
import {useOpenModal} from "@/app/core/application/global-state";
import { ICompanyAddRequest } from "@/app/core/application/dto/company";
import ModalCreateCompany from "../ModalCreateCompany/ModalCreateCompany";
import "./sectionCompanyStyles.scss";
import ModalUpdateCompany from "../ModalUpdateCompany/ModalUpdateCompany";

export default function SectionCompany({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const initialFormData: ICompanyAddRequest = {
    name:"",
    location: "",
    contact: ""
  };
  const { openModal } = useOpenModal((state) => state);
  const [formData, setFormData] = useState<ICompanyAddRequest>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="template">
      <Header title="Company Management" />
      <main className="main">
        {children}
        {openModal.state && openModal.type === "ADD_COMPANY" && (
          <ModalCreateCompany
            formData={formData}
            setFormData={setFormData}
            initialFormData={initialFormData}
            onChange={handleChange}
          />
        )}
        {openModal.state && openModal.type === "EDIT_COMPANY" && (
            <ModalUpdateCompany
              formData={formData}
              setFormData={setFormData}
              initialFormData={initialFormData}
              onChange={handleChange}
            />
        )}
        {openModal.state && openModal.type === "DELETE_COMPANY" && (
          <div>Delete company</div>
        )}
      </main>
      <Footer />
    </div>
  );
}
