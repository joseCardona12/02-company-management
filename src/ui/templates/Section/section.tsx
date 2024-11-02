import { Footer, Header } from "@/ui/layouts";
import "./sectionStyles.scss";
import { Modal } from "@/ui/organisms";

export default function Section({children}: {children: React.ReactNode}):React.ReactNode{
    return(
        <div className="template">
            <Header
                title="Company Management"
            />
            <main className="main">
                {children}
                <Modal>
                    <div>d</div>
                </Modal>
            </main>
            <Footer />
        </div>
    )
}