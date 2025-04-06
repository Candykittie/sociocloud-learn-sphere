
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    
    // Simulate login (would be replaced with actual authentication)
    toast.success(`Logged in as ${role}: ${username}`);
    console.log({ username, password, role });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-socio-dark text-white p-4">
        <div className="container-wrapper">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-socio-blue text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-md">
              SC
            </span>
            <span className="font-bold text-xl">Sociocloud</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-socio-dark">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to your Sociocloud account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select 
                  value={role} 
                  onValueChange={setRole}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-socio-blue hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-socio-blue hover:bg-socio-darkblue"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-socio-blue hover:underline font-medium">
                  Sign up now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
