"use client";
import { Footer, Header } from "@/ui/layouts";
import "./sectionStyles.scss";
import { useEffect, useState } from "react";
import {
  useCompanyState,
  useOpenModal,
} from "@/app/core/application/global-state";
import { getIdByName } from "@/app/core/application/utils";
import { IVacantAddRequest } from "@/app/core/application/dto/vacant";
import ModalCreate from "../ModalCreate/ModalCreate";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import { Modal } from "@/ui/organisms";
import ModalDelete from "../ModalDelete/ModalDelete";

export default function Section({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const initialFormData: IVacantAddRequest = {
    title: "",
    description: "",
    status: "",
    companyId: "0",
  };
  const { openModal } = useOpenModal((state) => state);
  const [formData, setFormData] = useState<IVacantAddRequest>(initialFormData);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectValueCompanyId, setSelectValueCompanyId] = useState<string>("");
  const { companies } = useCompanyState((state) => state);

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

  useEffect(() => {
    const companyId = getIdByName(companies, selectValueCompanyId);
    if (!companyId) return;
    setFormData((prevData) => ({
      ...prevData,
      status: selectValue,
      companyId: companyId.toString(),
    }));
  }, [selectValue, selectValueCompanyId, companies]);

  return (
    <div className="template">
      <Header title="Company Management" />
      <main className="main">
        {children}
        {openModal.state && openModal.type === "ADD_VACANT" && (
          <ModalCreate
            formData={formData}
            initialFormData={initialFormData}
            setFormData={setFormData}
            companies={companies}
            onChange={handleChange}
            selectValue={selectValue}
            selectValueCompanyId={selectValueCompanyId}
            setSelectValue={setSelectValue}
            setSelectValueCompanyId={setSelectValueCompanyId}
          />
        )}
        {openModal.state && openModal.type === "EDIT_VACANT" && (
          <ModalUpdate
            formData={formData}
            initialFormData={initialFormData}
            setFormData={setFormData}
            companies={companies}
            onChange={handleChange}
            selectValue={selectValue}
            selectValueCompanyId={selectValueCompanyId}
            setSelectValue={setSelectValue}
            setSelectValueCompanyId={setSelectValueCompanyId}
          />
        )}
        {openModal.state && openModal.type === "DELETE_VACANT" && (
          <ModalDelete />
        )}
      </main>
      <Footer />
    </div>
  );
}
