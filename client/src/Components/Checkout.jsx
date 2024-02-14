const checkoutHandler=async(amount)=>{
    try {
      const {data:{key}}=await axios.get("http://localhost:4000/getKey");
      const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{amount})
      var options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: order.currency,
        name: "E-commerce",
        description: "Test Transaction",
        image: pic,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentVerification",
        prefill: {
            name: "Sourav Kumar",
            email: "sourav9934413639@gmail.com",
            contact: "7488164548"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#427D9D"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
   }
    catch (error) {
      console.log(error)
    }
  }
  export default checkoutHandler;