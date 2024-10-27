import AuthStepTracker from "./components/authStepTracker";
import FormContainer from "./components/formContainer";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="text-primary">
      <div className="grid grid-cols-[30%_minmax(0,_1fr)] h-screen">
        <div className="bg-background_secondary flex flex-col justify-center items-center">
          <AuthStepTracker />
        </div>
        <div className="flex justify-center items-center bg-background-image bg-repeat bg-contain">
          <FormContainer
            title="Welcome to Chad"
            text="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
          >
            <Welcome />
          </FormContainer>
        </div>
      </div>
    </main>
  );
}
