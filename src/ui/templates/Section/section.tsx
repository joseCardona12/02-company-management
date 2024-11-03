"use client";
import { Footer, Header } from "@/ui/layouts";
import "./sectionStyles.scss";
import { Modal } from "@/ui/organisms";
import { FormField, FormTextArea, SelectField } from "@/ui/molecules";
import { Button } from "@/ui/atoms";
import { useEffect, useState } from "react";
import {
  useCompanyState,
  useOpenModal,
} from "@/app/core/application/global-state";
import { getIdByName, manageError } from "@/app/core/application/utils";
import { IVacant, IVacantAddRequest, IVacantErrorResponse } from "@/app/core/application/dto/vacant";
import vacantController from "@/app/infrastructure/controllers/vacantController";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const { openModal } = useOpenModal((state) => state);
  const [formData, setFormData] = useState<IVacantAddRequest>(initialFormData);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectValueCompanyId, setSelectValueCompanyId] = useState<string>("");
  const { companies } = useCompanyState((state) => state); // Get companies for use in the select field

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCreate = async (): Promise<void> => {
    if (!formData.title || !formData.description) return;
    const vacantCreated: IVacant | IVacantErrorResponse = await vacantController.create(formData);
    console.log("vacant created", vacantCreated);
    manageError("Vacant created successfully", "Error to create vacant", vacantCreated);
    setFormData(initialFormData);
    router.refresh();
  };

  useEffect(()=>{
    const companyId = getIdByName(companies, selectValueCompanyId);
    if(!companyId) return;
    setFormData({
      ...formData,
      status: selectValue,
      companyId: companyId.toString(),
    });

  }, [selectValue, selectValueCompanyId]);
  return (
    <div className="template">
      <Header title="Company Management" />
      <main className="main">
        {children}
        {openModal ? (
          <Modal title="Add Vacant">
            <form className="form">
              <FormField
                label="Title"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
                error={!formData.title}
              />
              <FormTextArea
                label="Description"
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
                placeholder="Enter the description..."
                error={!formData.description}
              />
              <SelectField
                label="Status"
                name="status"
                value={selectValue}
                options={["ACTIVE", "DESACTIVE", "PENDING"]}
                valueDefault="select status"
                setValue={setSelectValue}
              />
              <SelectField
                label="Companies"
                name="companyId"
                value={selectValueCompanyId}
                options={companies.map((company) => company.name)}
                valueDefault="select Company"
                setValue={setSelectValueCompanyId}
              />
              <Button
                onClick={handleCreate}
                type="button"
                text="Add"
                className="buttonModal"
              />
            </form>
          </Modal>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
