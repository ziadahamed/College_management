import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

export default function StudentDashboard() {
  const [editOpen, setEditOpen] = React.useState(false);
  const [viewSubjectsOpen, setViewSubjectsOpen] = React.useState(false);

  const [studentDetails, setStudentDetails] = React.useState({
    firstName: "Ziad Ahamed",
    lastName: "Ahamed Rasul Mohaideen",
    dob: "15th July 2003",
    gender: "Male",
    bloodGroup: "O+",
    contactNumber: "+60 12-3456789",
    address: "Lot PT24045 K, Taman Tanjung Damai, 21300, Kuala Terengganu, Terengganu.",
    classroom: "1 Bestari",
    dateOfEntry: "1 January 2018",
    status: "Active",
  });

  const subjects = [
    { subject: "Mathematics", faculty: "Dr. Smith" },
    { subject: "Physics", faculty: "Dr. Brown" },
    { subject: "Chemistry", faculty: "Dr. Green" },
  ];

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleViewSubjectsOpen = () => setViewSubjectsOpen(true);
  const handleViewSubjectsClose = () => setViewSubjectsOpen(false);

  const handleEditSubmit = () => {
    // Logic for saving edited details goes here.
    setEditOpen(false);
  };

  return (
    <AppProvider
      navigation={[{ segment: "student-dashboard", title: "Student Dashboard" }]}
      theme={{}}
    >
      <DashboardLayout>
        <PageContainer sx={{ backgroundColor: "white", minHeight: "100vh", padding: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Student Profile - {studentDetails.firstName} {studentDetails.lastName}
              </Typography>
              <Grid container spacing={2}>
                {/* Profile Picture */}
                <Grid item xs={12} sm={4} md={3}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Avatar sx={{ width: 120, height: 120 }} />
                  </Box>
                </Grid>

                {/* Personal Details */}
                <Grid item xs={12} sm={8} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Personal Details
                  </Typography>
                  <Typography>
                    <strong>Gender:</strong> {studentDetails.gender}
                  </Typography>
                  <Typography>
                    <strong>Date of Birth:</strong> {studentDetails.dob}
                  </Typography>
                  <Typography>
                    <strong>Blood Group:</strong> {studentDetails.bloodGroup}
                  </Typography>
                  <Typography>
                    <strong>Contact Number:</strong> {studentDetails.contactNumber}
                  </Typography>
                  <Typography>
                    <strong>Address:</strong> {studentDetails.address}
                  </Typography>
                </Grid>

                {/* Class Details */}
                <Grid item xs={12} sm={12} md={3}>
                  <Typography variant="h6" gutterBottom>
                    Class Details
                  </Typography>
                  <Typography>
                    <strong>Classroom:</strong> {studentDetails.classroom}
                  </Typography>
                  <Typography>
                    <strong>Date of Entry:</strong> {studentDetails.dateOfEntry}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {studentDetails.status}
                  </Typography>
                </Grid>
              </Grid>

              {/* Actions */}
              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleViewSubjectsOpen}>
                  View Subjects & Faculty
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleEditOpen}>
                  Edit Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        </PageContainer>

        {/* Dialog for Viewing Subjects and Faculty */}
        <Dialog open={viewSubjectsOpen} onClose={handleViewSubjectsClose}>
          <DialogTitle>Subjects & Faculty</DialogTitle>
          <DialogContent>
            {subjects.map((item, index) => (
              <Typography key={index}>
                <strong>{item.subject}:</strong> {item.faculty}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleViewSubjectsClose}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Dialog for Editing Student Details */}
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>Edit Student Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              value={studentDetails.firstName}
              onChange={(e) => setStudentDetails({ ...studentDetails, firstName: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              value={studentDetails.lastName}
              onChange={(e) => setStudentDetails({ ...studentDetails, lastName: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date of Birth"
              value={studentDetails.dob}
              onChange={(e) => setStudentDetails({ ...studentDetails, dob: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Gender"
              value={studentDetails.gender}
              onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contact Number"
              value={studentDetails.contactNumber}
              onChange={(e) => setStudentDetails({ ...studentDetails, contactNumber: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              multiline
              rows={2}
              value={studentDetails.address}
              onChange={(e) => setStudentDetails({ ...studentDetails, address: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditSubmit} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </DashboardLayout>
    </AppProvider>
  );
}
