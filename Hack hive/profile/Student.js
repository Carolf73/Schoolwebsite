export default function StudentProfile() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Section - Student Photo and Basic Info */}
          <div className="flex flex-col items-center border-r pr-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Student"
              className="w-40 h-40 rounded-full border-4 border-gray-300"
            />
            <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Class: 10</p>
            <p className="text-gray-600">Roll No: 25</p>
          </div>
  
          {/* Right Section - Personal Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
            <p><strong>Date of Birth:</strong> 12th Jan 2007</p>
            <p><strong>Blood Group:</strong> B+</p>
            <p><strong>Religion:</strong> Christianity</p>
            <p><strong>Father's Name:</strong> Michael Doe</p>
            <p><strong>Mother's Name:</strong> Sarah Doe</p>
            <p><strong>Address:</strong> 123 Main St, Springfield, USA</p>
          </div>
        </div>
      </div>
    );
  }
  