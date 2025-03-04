export const userSignup = (request, response) => {
    try {
        console.log(request.body);
        response.status(200).json({ message: "Signup successful" });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
};
