import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header>
      <div>
        <h1>Splash App</h1>
        {/* Button Group */}
        <div className="flex gap-4">
          {!["/counter-app"].includes(pathname) ? (
            <>
              <Button 
                buttonLabel="Sign In" 
                buttonSize="text-lg"  // You can adjust this as needed
                buttonBackgroundColor="red" 
                action={() => console.log("Sign In clicked")}  // Add an action for the button
              />
              <Button 
                buttonLabel="Sign Up" 
                buttonSize="text-lg"  // You can adjust this as needed
                buttonBackgroundColor="blue" 
                action={() => console.log("Sign Up clicked")}  // Add an action for the button
              />
            </>
          ) : (
            <p className="font-semibold text-lg">Current count : {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
