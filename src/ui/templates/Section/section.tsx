import { Footer, Header } from "@/ui/layouts";
import "./sectionStyles.scss";

export default function Section({children}: {children: React.ReactNode}):React.ReactNode{
    return(
        <div className="template">
            <Header
                title="Company Management"
            />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}