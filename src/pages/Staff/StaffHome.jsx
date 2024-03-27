import StaffHeader from "../../components/Staff/StaffHeader";
import StaffPage from "../../components/Staff/StaffPage";

function StaffHome() {
  return (
    <>
      <div className="w-screen">
        <div>
          <StaffHeader />
        </div>
        <StaffPage />
      </div>
    </>
  );
}
export default StaffHome;
