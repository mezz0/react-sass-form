export default async function handler(req, res) {
  console.log(req, res);
  if (req.method === "POST") {
      await new Promise((resolve) => setTimeout(resolve, 1000));

    const { emailAddress } = req.body;

    if (emailAddress) {
      // For testing purposes any email that includes "alreadysubscribed@" will return an error
      if (emailAddress.includes("alreadysubscribed@")) {
        return res.status(400).json({
          status: "error",
          message: "You have signed in already"
        });
      }
      return res.status(200).json({
        status: "success"
      });
    }
  } else {
    return res.status(404).json({});
  }
}
