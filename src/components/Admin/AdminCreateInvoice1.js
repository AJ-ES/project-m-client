import React from 'react'
import './AdminCreateInvoice.css';
import background from '../images/Desktop.png'
import A from '../images/A.png';
import D from '../images/D.png';
function AdminCreateInvoice() {
  const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState({});

    const [sellers, setSellers] = useState([]);
    const [selectedSeller, setSelectedSeller] = useState({});

    const [buyers, setBuyers] = useState([]);
    const [selectedBuyer, setSelectedBuyer] = useState({});

    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState({});

    const [consignments, setConsignments] = useState([]);
    const [selectedConsignment, setSelectedConsignment] = useState({});

    const [dataToSend, setDataToSend] = useState({
        companydetails: {
          companyname: '',
          companyregistrationtype: '',
          companygstno: '',
          companycontact: '',
          companycountry: '',
          companystate: '',
          companyofficeaddress: '',
          companypincode: '',
        },
        sellerdetails: {
          sellercompanyname: '',
          sellercompanygstno: '',
          sellercompanyaddress: '',
          sellercompanystatename: '',
          sellercompanystatecode: '',
        },
        buyerdetails: {
          buyercompanyname: '',
          buyercompanygstno: '',
          buyercompanyaddress: '',
          buyercompanystatename: '',
          buyercompanystatecode: '',
        },
        vehicledetails: {
            drivername: '',
            drivernumber: '',
            driveraddress: '',
            driveridproof: '',
            driverlicenseno: '',
            vehiclenumber: '',
            vehiclemodel: '',
            vehicleofficebranch: '',
        },
        consignmentdetails: {
            itemdetails: [
            ],
          },
          invoicedetails: {
            invoiceno: '',
            ewaybillno: '',
            invoicedate: '',
            deliverynote: '',
            termsofpayment: '',
            supplierref: '',
            otherref: '',
            buyersorder: '',
            ordereddate: '',
            dispatchdocumentno: '',
            deliverynotedate: '',
            dispatchthrough: '',
            destination: '',
            termsandcondition: '',
        },
        boardingdetails: {
            lrno: '',
            weight: 0,
            transportationcost: 0,
            totalcost: 0,
            dateofloading: '',
            startingpoint: '',
            endingpoint: '',
            watermark: '',

        },

      });

    const API = process.env.REACT_APP_API;

    useEffect(() => {
        const fetchCompanies = async () => {
          try {
            const response = await fetch(`${API}company`);
            if (response.ok) {
              const data = await response.json();
              setCompanies(data);
            } else {
              console.error('Failed to fetch companies data');
            }
          } catch (error) {
            console.error('Error fetching companies data:', error);
          }
        };
      
        fetchCompanies();
      }, [API]);

        useEffect(() => {
            const fetchSellers = async () => {
            try {
                const response = await fetch(`${API}seller`);
                if (response.ok) {
                const data = await response.json();
                setSellers(data);
                }
                else{
                console.error('Failed to fetch sellers data');
                }
            }
            catch (error) {
                console.error('Error fetching sellers data:', error);
            }
        };
        fetchSellers();
        }, [API]);

        useEffect(() => {
            const fetchBuyers = async () => {
            try {
                const response = await fetch(`${API}buyer`);
                if (response.ok) {
                const data = await response.json();
                setBuyers(data);
                }
                else{
                console.error('Failed to fetch buyers data');
                }
            }
            catch (error) {
                console.error('Error fetching buyers data:', error);
            }
        };
        fetchBuyers();
        }, [API]);

        useEffect(() => {
            const fetchVehicles = async () => {
            try {
                const response = await fetch(`${API}vechicle`);
                if (response.ok) {
                const data = await response.json();
                setVehicles(data);
                }
                else{
                console.error('Failed to fetch vehicles data');
                }
            }
            catch (error) {
                console.error('Error fetching vehicles data:', error);
            }
        };
        fetchVehicles();
        }, [API]);

        useEffect(() => {
            const fetchConsignments = async () => {
            try {
                const response = await fetch(`${API}consignment`);
                if (response.ok) {
                const data = await response.json();
                setConsignments(data);
                }
                else{
                console.error('Failed to fetch consignments data');
                }
            }
            catch (error) {
                console.error('Error fetching consignments data:', error);
            }
        };
        fetchConsignments();
        }, [API]);

        const handleSelectChangeCompany = (e) => {
            const selectedCompanyId = e.target.value;
            const selectedCompany = companies.find((company) => company._id === selectedCompanyId);

            setDataToSend((prevData) => ({
                ...prevData,
                companydetails: {
                  ...prevData.companydetails,
                  companyid: selectedCompany.companyid,
                  companyname: selectedCompany.companyname,
                  companyregistrationtype: selectedCompany.companyregistrationtype,
                  companygstno: selectedCompany.companygstno,
                  companycontact: selectedCompany.companycontact,
                  companycountry: selectedCompany.companycountry,
                  companystate: selectedCompany.companystate,
                  companyofficeaddress: selectedCompany.companyofficeaddress,
                  companypincode: selectedCompany.companypincode,
                },
                }));
                setSelectedCompany(selectedCompany);
            };

            const handleSelectChangeSeller = (e) => {
                const selectedSellerId = e.target.value;
                const selectedSeller = sellers.find((seller) => seller._id === selectedSellerId);
        
                setDataToSend((prevData) => ({
                  ...prevData,
                  sellerdetails: {
                    ...prevData.sellerdetails,
                    sellerid: selectedSeller.sellerid,
                    sellercompanyname: selectedSeller.sellercompanyname,
                    sellercompanygstno: selectedSeller.sellercompanygstno,
                    sellercompanyaddress: selectedSeller.sellercompanyaddress,
                    sellercompanystatename: selectedSeller.sellercompanystatename,
                    sellercompanystatecode: selectedSeller.sellercompanystatecode,
                  },
                }));
                setSelectedSeller(selectedSeller);
              };

                const handleSelectChangeBuyer = (e) => {
                    const selectedBuyerId = e.target.value;
                    const selectedBuyer = buyers.find((buyer) => buyer._id === selectedBuyerId);
            
                    setDataToSend((prevData) => ({
                      ...prevData,
                      buyerdetails: {
                        ...prevData.buyerdetails,
                        buyerid: selectedBuyer.buyerid,
                        buyercompanyname: selectedBuyer.buyercompanyname,
                        buyercompanygstno: selectedBuyer.buyercompanygstno,
                        buyercompanyaddress: selectedBuyer.buyercompanyaddress,
                        buyercompanystatename: selectedBuyer.buyercompanystatename,
                        buyercompanystatecode: selectedBuyer.buyercompanystatecode,
                      },
                    }));
                    setSelectedBuyer(selectedBuyer);
                  };

                    const handleSelectChangeVehicle = (e) => {
                        const selectedVehicleId = e.target.value;
                        const selectedVehicle = vehicles.find((vehicle) => vehicle._id === selectedVehicleId);
                
                        setDataToSend((prevData) => ({
                          ...prevData,
                          vehicledetails: {
                            ...prevData.vehicledetails,
                            vehicleid: selectedVehicle.vehicleid,                    
                            drivername: selectedVehicle.drivername,
                            drivernumber: selectedVehicle.drivernumber,
                            driveraddress: selectedVehicle.driveraddress,
                            driveridproof: selectedVehicle.driveridproof,
                            driverlicenseno: selectedVehicle.driverlicenseno,
                            vehiclenumber: selectedVehicle.vehiclenumber,
                            vehiclemodel: selectedVehicle.vehiclemodel,
                            vehicleofficebranch: selectedVehicle.vehicleofficebranch,
                          },
                        }));
                        setSelectedVehicle(selectedVehicle);
                      };
                      const handleSelectChangeConsignment = (e) => {
                        const selectedConsignmentId = e.target.value;
                        const selectedConsignment = consignments.find(
                          (consignment) => consignment._id === selectedConsignmentId
                        );
                    
                        setDataToSend((prevData) => ({
                          ...prevData,
                          consignmentdetails: {
                            ...prevData.consignmentdetails,
                            itemdetails: prevData.consignmentdetails.itemdetails.map(
                              (item, index) =>
                                index === -1 ? { ...item, ...selectedConsignment } : item
                            )
                          }
                        }));
                    
                        setSelectedConsignment(selectedConsignment);
                      };
                    
            const ConsignmentsAdd = () => {
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: [
                    ...prevData.consignmentdetails.itemdetails,
                    selectedConsignment
                  ]
                }
              }));
              setSelectedConsignment(selectedConsignment);
            };
          
            const ConsignmentsRemove = (index) => {
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: prevData.consignmentdetails.itemdetails.filter(
                    (item, i) => i !== index
                  )
                }
              }));
            };
          
            const handleConsignmentChange = (e, field) => {
              const value = e.target.value;
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: prevData.consignmentdetails.itemdetails.map(
                    (item, index) => {
                      if (index === 0) {
                        return {
                          ...item,
                          [field]: value
                        };
                      }
                      return item;
                    }
                  )
                }
              }));
            };
            const handleChange = (e, section, field) => {
              const value = e.target.value;
              setDataToSend((prevData) => ({
                ...prevData,
                [section]: {
                  ...prevData[section],
                  [field]: value,
                },
              }));
          }

            const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                  const response = await fetch(`${API}invoice`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                  });
                  if (response.ok) {
                    const data = await response.json();
                    console.log('Invoice created successfully:', data);
                  } else {
                    console.error('Invoice creation failed');
                  }
                } catch (error) {
                  console.error('Error creating invoice:', error);
                }
              }
    return (
        <div 
        style={{
            backgroundImage: `url(${background})`,
            minHeight: '100vh',
        }}
        >
          <AdminNavbar/>

      <h1 className='admin-create-invoice-title'>CREATE INVOICE</h1>
      <form className="admin-create-invoice-form-all" onSubmit={handleSubmit}>
      <div className='admin-create-invoice-container'>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>COMPANY DETAILS</h2>

      <select className='admin-create-invoice-select'>
      id="companyid"
      name="companyid"
      value={selectedCompany.companyid}
      onChange={handleSelectChangeCompany}
      <option value="">Select Company ID</option>
                    {companies.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.companyname}
                      </option>
                    ))}
      </select>
      </div>
      <form className='admin-create-invoice-form'>
      <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companyname"
        >Company Name</label>
        <input className='admin-create-invoice-form-input' 
        id="companyname"
        name="companyname"
        type="text"
        value={selectedCompany.companyname}
        onChange={(e) =>
          handleChange(e, "companydetails", "companyname")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companyregistrationtype"
        >Company Registration type</label>
        <input className='admin-create-invoice-form-input' 
        id="companyregistrationtype"
        name="companyregistrationtype"
        type="text"
        value={selectedCompany.companyregistrationtype}
        onChange={(e) =>
          handleChange(
            e,
            "companydetails",
            "companyregistrationtype"
          )
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companygstno"
        >Company GST No.</label>
        <input className='admin-create-invoice-form-input'
            id="companygstno"
            name="companygstno"
            type="text"
            value={selectedCompany.companygstno}
            onChange={(e) =>
              handleChange(e, "companydetails", "companygstno")
            }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companycontact"
        >Company Contact</label>
        <input className='admin-create-invoice-form-input' 
        id="companycontact"
        name="companycontact"
        type="tel"
        value={selectedCompany.companycontact}
        onChange={(e) =>
          handleChange(e, "companydetails", "companycontact")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companycountry"
        >Company country</label>
        <input className='admin-create-invoice-form-input'
        id="companycountry"
        name="companycountry"
        type="text"
        value={selectedCompany.companycountry}
        onChange={(e) =>
          handleChange(e, "companydetails", "companycountry")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companystate"
        >Company State</label>
        <input className='admin-create-invoice-form-input'
        id="companystate"
        name="companystate"
        type="text"
        value={selectedCompany.companystate}
        onChange={(e) =>
          handleChange(e, "companydetails", "companystate")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companyofficeaddress"
        >Company Office Address</label>
        <input className='admin-create-invoice-form-input' 
        id="companyofficeaddress"
        name="companyofficeaddress"
        type="text"
        value={selectedCompany.companyofficeaddress}
        onChange={(e) =>
          handleChange(e, "companydetails", "companyofficeaddress")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="companypincode"
        >Company  pincode</label>
        <input className='admin-create-invoice-form-input' 
        id="companypincode"
        name="companypincode"
        type="text"
        value={selectedCompany.companypincode}
        onChange={(e) =>
          handleChange(e, "companydetails", "companypincode")
        }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>SELLER DETAILS</h2>
      <select className='admin-create-invoice-select'
      id="sellerid"
      name="sellerid"
      value={selectedSeller.sellerid}
      onChange={handleSelectChangeSeller}
      >
        <option value="">Select Seller ID</option>
        {sellers.map((seller) => (
          <option key={seller._id} value={seller._id}>
            {seller.sellerid}
          </option>
        ))}
      </select>
      </div>
      <form className='admin-create-invoice-form'>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="sellercompanyname"
        >Seller Company Name</label>
        <input className='admin-create-invoice-form-input' 
        id="sellercompanyname"
        name="sellercompanyname"
        type="text"
        value={selectedSeller.sellercompanyname}
        onChange={(e) =>
          handleChange(e, "sellerdetails", "sellercompanyname")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="sellercompanygstno"
        >Seller Company GST No.</label>
        <input className='admin-create-invoice-form-input' 
        id="sellercompanygstno"
        name="sellercompanygstno"
        type="text"
        value={selectedSeller.sellercompanygstno}
        onChange={(e) =>
          handleChange(e, "sellerdetails", "sellercompanygstno")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
         htmlFor="sellercompanyaddress"
        >Seller Company Address</label>
        <input className='admin-create-invoice-form-input' 
        id="sellercompanyaddress"
        name="sellercompanyaddress"
        type="text"
        value={selectedSeller.sellercompanyaddress}
        onChange={(e) =>
          handleChange(e, "sellerdetails", "sellercompanyaddress")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="sellercompanystatename"
        >Seller Company State Name</label>
        <input className='admin-create-invoice-form-input' 
        id="sellercompanystatename"
        name="sellercompanystatename"
        type="text"
        value={selectedSeller.sellercompanystatename}
        onChange={(e) =>
          handleChange(e, "sellerdetails", "sellercompanystatename")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="sellercompanystatecode"
        >Seller Company State Code</label>    
        <input className='admin-create-invoice-form-input'
        id="sellercompanystatecode"
        name="sellercompanystatecode"
        type="text"
        value={selectedSeller.sellercompanystatecode}
        onChange={(e) =>
          handleChange(e, "sellerdetails", "sellercompanystatecode")
        }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>BUYER DETAILS</h2>
      <select className='admin-create-invoice-select'
      htmlFor="buyerid"
      id="buyerid"
      name="buyerid"
      value={selectedBuyer.buyerid}
      onChange={handleSelectChangeBuyer}
      >
        <option value="">Select Buyer ID</option>
        {buyers.map((buyer) => (
          <option key={buyer._id} value={buyer._id}>
            {buyer.buyerid}
          </option>
        ))}
      </select>
      </div>
      <form className='admin-create-invoice-form'>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyercompanyname"
        >Buyer Company Name</label>
        <input className='admin-create-invoice-form-input' 
        id="buyercompanyname"
        name="buyercompanyname"
        type="text"
        value={selectedBuyer.buyercompanyname}
        onChange={(e) =>
          handleChange(e, "buyerdetails", "buyercompanyname")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyercompanygstno"
        >Buyer Company GST No.</label>
        <input className='admin-create-invoice-form-input' 
        id="buyercompanygstno"
        name="buyercompanygstno"
        type="text"
        value={selectedBuyer.buyercompanygstno}
        onChange={(e) =>
          handleChange(e, "buyerdetails", "buyercompanygstno")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyercompanyaddress"
        >Buyer Company Address</label>
        <input className='admin-create-invoice-form-input' 
        id="buyercompanyaddress"
        name="buyercompanyaddress"
        type="text"
        value={selectedBuyer.buyercompanyaddress}
        onChange={(e) =>
          handleChange(e, "buyerdetails", "buyercompanyaddress")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyercompanystatename"
        >Buyer Company State Name</label>
        <input className='admin-create-invoice-form-input'
        id="buyercompanystatename"
        name="buyercompanystatename"
        type="text"
        value={selectedBuyer.buyercompanystatename}
        onChange={(e) =>
          handleChange(e, "buyerdetails", "buyercompanystatename")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyercompanystatecode"
        >Buyer Company State Code</label>
        <input className='admin-create-invoice-form-input' 
        id="buyercompanystatecode"
        name="buyercompanystatecode"
        type="text"
        value={selectedBuyer.buyercompanystatecode}
        onChange={(e) =>
          handleChange(e, "buyerdetails", "buyercompanystatecode")
        }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>VECHICLE DETAILS</h2>
      <select className='admin-create-invoice-select'
      id="vehicleid"
      name="vehicleid"
      value={selectedVehicle.vehicleid}
      onChange={handleSelectChangeVehicle}
      >
        <option value=''>Select Vehicle ID</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle._id} value={vehicle._id}>
              {vehicle.drivername}
            </option>
          ))}
      </select>
      </div>
      <form className='admin-create-invoice-form'>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="drivername"
        >Driver Name</label>
        <input className='admin-create-invoice-form-input'
         id="drivername"
         name="drivername"
         type="text"
         value={selectedVehicle.drivername}
         onChange={(e) =>
           handleChange(e, "vehicledetails", "drivername")
         }  
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="drivernumber"
        >Driver Number</label>
        <input className='admin-create-invoice-form-input'
        id="drivernumber"
        name="drivernumber"
        type="tel"
        value={selectedVehicle.drivernumber}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "drivernumber")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="driveraddress"
        >Driver Address</label>
        <input className='admin-create-invoice-form-input' 
        id="driveraddress"
        name="driveraddress"
        type="text"
        value={selectedVehicle.driveraddress}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "driveraddress")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="driveridproof"
        >Driver Id Proof</label>
        <input className='admin-create-invoice-form-input'
         id="driveridproof"
         name="driveridproof"
         type="text"
         value={selectedVehicle.driveridproof}
         onChange={(e) =>
           handleChange(e, "vehicledetails", "driveridproof")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="driverlicenseno"
        >Driver License No.</label>
        <input className='admin-create-invoice-form-input'
        id="driverlicenseno"
        name="driverlicenseno"
        type="text"
        value={selectedVehicle.driverlicenseno}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "driverlicenseno")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="vehiclenumber"
        >Vechicle Number</label>
        <input className='admin-create-invoice-form-input' 
        id="vehiclenumber"
        name="vehiclenumber"
        type="text"
        value={selectedVehicle.vechiclenuumber}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "vehiclenumber")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="vehiclemodel"
        >Vechicle Model</label>
        <input className='admin-create-invoice-form-input'
        id="vehiclemodel"
        name="vehiclemodel"
        type="text"
        value={selectedVehicle.vechiclemodel}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "vehiclemodel")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="vehicleofficebranch"
        >Vechicle office branch</label>
        <input className='admin-create-invoice-form-input'  
        id="vehicleofficebranch"
        name="vehicleofficebranch"
        type="text"
        value={selectedVehicle.vechicleofficebranch}
        onChange={(e) =>
          handleChange(e, "vehicledetails", "vehicleofficebranch")
        }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>CONSIGNMENT DETAILS</h2>
      <select className='admin-create-invoice-select'
       id="consignmentid"
       name="consignmentid"
       value={selectedConsignment.consignmentid}
       onChange={handleSelectChangeConsignment}
      >
        <option value="">Select Consignment ID</option>
          {consignments.map((consignment) => (
            <option key={consignment._id} value={consignment._id}>
              {consignment.itemname}
            </option>
          ))}
      </select>
      </div>
      <table className="admin-create-invoice-table-consigment">
                  <thead className="admin-create-invoice-table-thead">
                    <tr className="admin-create-invoice-table-row-head">
                      <th className="admin-create-invoice-table-row-th">
                        Item Name
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Quantity
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item HSN
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Price
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Tax Rate
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="admin-create-invoice-table-tbody">
                    <tr className="admin-create-invoice-table-row-body">
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                        className='admin-create-invoice-table-consigment-input'
                          type="text"
                          disabled
                          value={selectedConsignment.itemname}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemname")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemquantity}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemquantity")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="text"
                          disabled
                          value={selectedConsignment.itemhsn}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemhsn")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemprice}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemprice")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemtaxrate}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemtaxrate")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <button type="button" onClick={() => ConsignmentsAdd()}>
                        <img className='admin-create-invoice-table-consigment-icon' src={A} alt='add'/>
                        </button>
                      </td>
                    </tr>

                    {dataToSend.consignmentdetails.itemdetails.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className="admin-create-invoice-table-row-body"
                        >
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemname}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemquantity}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemhsn}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemprice}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemtaxrate}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            <button
                              type="button"
                              onClick={() => ConsignmentsRemove(index)}
                            >
                              <img className='admin-create-invoice-table-consigment-icon-low' src={D} alt='delete'/>
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
      <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>INVOICE DETAILS</h2>
      </div>
      <form className='admin-create-invoice-form'>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="invoiceno"
        >Invoice Date</label>
        <input className='admin-create-invoice-form-input' 
         id="invoiceno"
         name="invoiceno"
         type="text"
         onChange={(e) =>
           handleChange(e, "invoicedetails", "invoiceno")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="ewaybillno"
        >E Way Bill No</label>
        <input className='admin-create-invoice-form-input' 
        id="ewaybillno"
        name="ewaybillno"
        type="text"
        value={selectedConsignment.ewaybillno}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "ewaybillno")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="invoicedate">
        Invoice Date</label>
        <input className='admin-create-invoice-form-input' 
         id="invoicedate"
         name="invoicedate"
         type="date"
         value={selectedConsignment.invoicedate}
         onChange={(e) =>
           handleChange(e, "invoicedetails", "invoicedate")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="deliverynote"
        >Delivery Note</label>
        <input className='admin-create-invoice-form-input' 
        id="deliverynote"
        name="deliverynote"
        type="text"
        value={selectedConsignment.deliverynote}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "deliverynote")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor='termsofpayment'
        >Terms of Payment</label>
        <input className='admin-create-invoice-form-input' 
        id="termsofpayment"
        name="termsofpayment"
        type="text"
        value={selectedConsignment.termsofpayment}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "termsofpayment")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="supplierref"
        >Supplier Ref.</label>
        <input className='admin-create-invoice-form-input' 
        id="supplierref"
        name="supplierref"
        type="text"
        value={selectedConsignment.supplierref}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "supplierref")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="otherref"
        >Other Ref.</label>
        <br />
        <input className='admin-create-invoice-form-input' 
        id="otherref"
        name="otherref"
        type="text"
        value={selectedConsignment.otherref}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "otherref")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="buyersorder"
        >Buyer's Order No.</label>
        <input className='admin-create-invoice-form-input' 
        id="buyersorder"
        name="buyersorder"
        type="text"
        value={selectedConsignment.buyersorder}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "buyersorder")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="ordereddate"
        >Buyer's Order Date</label>
        <input className='admin-create-invoice-form-input' 
        id="ordereddate"
        name="ordereddate"
        type="date"
        value={selectedConsignment.ordereddate}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "ordereddate")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="dispatchdocumentno"
        >Dispatch Document No.</label>
        <input className='admin-create-invoice-form-input' 
        id="dispatchdocumentno"
        name="dispatchdocumentno"
        type="text"
        value={selectedConsignment.dispatchdocumentno}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "dispatchdocumentno")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="deliverynotedate"
        >Delivery Note Date</label>
        <input className='admin-create-invoice-form-input' 
         id="deliverynotedate"
         name="deliverynotedate"
         type="date"
         value={selectedConsignment.deliverynotedate}
         onChange={(e) =>
           handleChange(e, "invoicedetails", "deliverynotedate")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="dispatchthrough"
        >Dispatch Through</label>
        <input className='admin-create-invoice-form-input' 
        id="dispatchthrough"
        name="dispatchthrough"
        type="text"
        value={selectedConsignment.dispatchthrough}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "dispatchthrough")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="destination"
        >Destination</label>
        <br />
        <input className='admin-create-invoice-form-input'
        id="destination"
        name="destination"
        type="text"
        value={selectedConsignment.destination}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "destination")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="termsandcondition"
        >Terms and Conditions</label>
        <input className='admin-create-invoice-form-input' 
        id="termsandcondition"
        name="termsandcondition"
        type="text"
        value={selectedConsignment.termsandcondition}
        onChange={(e) =>
          handleChange(e, "invoicedetails", "termsandcondition")
        }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data'>
      <h2 className='admin-create-invoice-subtitle'>BOARDING DETAILS</h2>
      </div>
      <form className='admin-create-invoice-form'>
      <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="lrno"
        >LR Number</label>
        <input className='admin-create-invoice-form-input' 
         id="lrno"
         name="lrno"
         type="text"
         value={selectedConsignment.lrno}
         onChange={(e) =>
           handleChange(e, "boardingdetails", "lrno")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="weight"
        >Weight of Load</label>
        <input className='admin-create-invoice-form-input'
         id="weight"
         name="weight"
         type="number"
         value={selectedConsignment.weight}
         onChange={(e) =>
           handleChange(e, "boardingdetails", "weight")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="transportationcost"
        >Transportation Cost</label>
        <input className='admin-create-invoice-form-input' 
        id="transportationcost"
        name="transportationcost"
        type="number"
        value={selectedConsignment.transportationcost}
        onChange={(e) =>
          handleChange(e, "boardingdetails", "transportationcost")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="totalcost"
        >Total Transportation Cost</label>
        <input className='admin-create-invoice-form-input' 
        id="totalcost"
        name="totalcost"
        type="number"
        value={selectedConsignment.totalcost}
        onChange={(e) =>
          handleChange(e, "boardingdetails", "totalcost")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="dateofloading"
        >Date of Loading</label>
        <input className='admin-create-invoice-form-input' 
        id="dateofloading"
        name="dateofloading"
        type="date"
        value={selectedConsignment.dateofloading}
        onChange={(e) =>
          handleChange(e, "boardingdetails", "dateofloading")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="startingpoint"
        >Starting Point</label>
        <input className='admin-create-invoice-form-input' 
        id="startingpoint"
        name="startingpoint"
        type="text"
        value={selectedConsignment.startingpoint}
        onChange={(e) =>
          handleChange(e, "boardingdetails", "startingpoint")
        }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="endingpoint"
        >Ending Point</label>
        <br />
        <input className='admin-create-invoice-form-input'
         id="endingpoint"
         name="endingpoint"
         type="text"
         value={selectedConsignment.endingpoint}
         onChange={(e) =>
           handleChange(e, "boardingdetails", "endingpoint")
         }
        />
        </div>
        <div className='admin-create-invoice-form-div'>
        <label className='admin-create-invoice-form-label'
        htmlFor="watermark"
        >Water Mark</label>
        <input className='admin-create-invoice-form-input' 
         id="watermark"
         name="watermark"
         type="text"
         value={selectedConsignment.watermark}
         onChange={(e) =>
           handleChange(e, "boardingdetails", "watermark")
         }
        />
        </div>
        </form>
        <div className='admin-create-invoice-data-submit'>
      <button className='admin-create-invoice-button'>CREATE INVOICE</button>
    </div>
    
    </div>
    </form>
    </div>
  )
}

export default AdminCreateInvoice














/*
import React,{useEffect,useState} from 'react'
import './AdminCreateInvoice.css';
import background from '../images/Desktop.png'
import A from '../images/A.png';
import D from '../images/D.png';
import E from '../images/E.png';
import AdminNavbar from './AdminNavbar';


const AdminCreateInvoice = () => {

    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState({});

    const [sellers, setSellers] = useState([]);
    const [selectedSeller, setSelectedSeller] = useState({});

    const [buyers, setBuyers] = useState([]);
    const [selectedBuyer, setSelectedBuyer] = useState({});

    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState({});

    const [consignments, setConsignments] = useState([]);
    const [selectedConsignment, setSelectedConsignment] = useState({});

    const [dataToSend, setDataToSend] = useState({
        companydetails: {
          companyid: '',
          companyname: '',
          companyregistrationtype: '',
          companygstno: '',
          companycontact: '',
          companycountry: '',
          companystate: '',
          companyofficeaddress: '',
          companypincode: '',
        },
        sellerdetails: {
          sellerid: '',
          sellercompanyname: '',
          sellercompanygstno: '',
          sellercompanyaddress: '',
          sellercompanystatename: '',
          sellercompanystatecode: '',
        },
        buyerdetails: {
          buyerid: '',
          buyercompanyname: '',
          buyercompanygstno: '',
          buyercompanyaddress: '',
          buyercompanystatename: '',
          buyercompanystatecode: '',
        },
        vehicledetails: {
            vehicleid: '',
            drivername: '',
            drivernumber: '',
            driveraddress: '',
            driveridproof: '',
            driverlicenseno: '',
            vehiclenumber: '',
            vehiclemodel: '',
            vehicleofficebranch: '',
        },
        consignmentdetails: {
            itemdetails: [
            ],
          },
          invoicedetails: {
            invoiceno: '',
            ewaybillno: '',
            invoicedate: '',
            deliverynote: '',
            supplierref: '',
            otherref: '',
            buyersorder: '',
            ordereddate: '',
            dispatchdocumentno: '',
            deliverynotedate: '',
            dispatchthrough: '',
            destination: '',
            termsandcondition: '',
        },
        boardingdetails: {
            weight: 0,
            transportationcost: 0,
            totalcost: 0,
            dateofloading: '',
            startingpoint: '',
            endingpoint: '',
        },

      });

    const API = process.env.REACT_APP_API;

    useEffect(() => {
        const fetchCompanies = async () => {
          try {
            const response = await fetch(`${API}company`);
            if (response.ok) {
              const data = await response.json();
              setCompanies(data);
            } else {
              console.error('Failed to fetch companies data');
            }
          } catch (error) {
            console.error('Error fetching companies data:', error);
          }
        };
      
        fetchCompanies();
      }, [API]);

        useEffect(() => {
            const fetchSellers = async () => {
            try {
                const response = await fetch(`${API}seller`);
                if (response.ok) {
                const data = await response.json();
                setSellers(data);
                }
                else{
                console.error('Failed to fetch sellers data');
                }
            }
            catch (error) {
                console.error('Error fetching sellers data:', error);
            }
        };
        fetchSellers();
        }, [API]);

        useEffect(() => {
            const fetchBuyers = async () => {
            try {
                const response = await fetch(`${API}buyer`);
                if (response.ok) {
                const data = await response.json();
                setBuyers(data);
                }
                else{
                console.error('Failed to fetch buyers data');
                }
            }
            catch (error) {
                console.error('Error fetching buyers data:', error);
            }
        };
        fetchBuyers();
        }, [API]);

        useEffect(() => {
            const fetchVehicles = async () => {
            try {
                const response = await fetch(`${API}vechicle`);
                if (response.ok) {
                const data = await response.json();
                setVehicles(data);
                }
                else{
                console.error('Failed to fetch vehicles data');
                }
            }
            catch (error) {
                console.error('Error fetching vehicles data:', error);
            }
        };
        fetchVehicles();
        }, [API]);

        useEffect(() => {
            const fetchConsignments = async () => {
            try {
                const response = await fetch(`${API}consignment`);
                if (response.ok) {
                const data = await response.json();
                setConsignments(data);
                }
                else{
                console.error('Failed to fetch consignments data');
                }
            }
            catch (error) {
                console.error('Error fetching consignments data:', error);
            }
        };
        fetchConsignments();
        }, [API]);

        const handleSelectChangeCompany = (e) => {
            const selectedCompanyId = e.target.value;
            const selectedCompany = companies.find((company) => company._id === selectedCompanyId);

            setDataToSend((prevData) => ({
                ...prevData,
                companydetails: {
                  ...prevData.companydetails,
                  companyid: selectedCompany.companyid,
                  companyname: selectedCompany.companyname,
                  companyregistrationtype: selectedCompany.companyregistrationtype,
                  companygstno: selectedCompany.companygstno,
                  companycontact: selectedCompany.companycontact,
                  companycountry: selectedCompany.companycountry,
                  companystate: selectedCompany.companystate,
                  companyofficeaddress: selectedCompany.companyofficeaddress,
                  companypincode: selectedCompany.companypincode,
                },
                }));
                setSelectedCompany(selectedCompany);
            };

            const handleSelectChangeSeller = (e) => {
                const selectedSellerId = e.target.value;
                const selectedSeller = sellers.find((seller) => seller._id === selectedSellerId);
        
                setDataToSend((prevData) => ({
                  ...prevData,
                  sellerdetails: {
                    ...prevData.sellerdetails,
                    sellerid: selectedSeller.sellerid,
                    sellercompanyname: selectedSeller.sellercompanyname,
                    sellercompanygstno: selectedSeller.sellercompanygstno,
                    sellercompanyaddress: selectedSeller.sellercompanyaddress,
                    sellercompanystatename: selectedSeller.sellercompanystatename,
                    sellercompanystatecode: selectedSeller.sellercompanystatecode,
                  },
                }));
                setSelectedSeller(selectedSeller);
              };

                const handleSelectChangeBuyer = (e) => {
                    const selectedBuyerId = e.target.value;
                    const selectedBuyer = buyers.find((buyer) => buyer._id === selectedBuyerId);
            
                    setDataToSend((prevData) => ({
                      ...prevData,
                      buyerdetails: {
                        ...prevData.buyerdetails,
                        buyerid: selectedBuyer.buyerid,
                        buyercompanyname: selectedBuyer.buyercompanyname,
                        buyercompanygstno: selectedBuyer.buyercompanygstno,
                        buyercompanyaddress: selectedBuyer.buyercompanyaddress,
                        buyercompanystatename: selectedBuyer.buyercompanystatename,
                        buyercompanystatecode: selectedBuyer.buyercompanystatecode,
                      },
                    }));
                    setSelectedBuyer(selectedBuyer);
                  };

                    const handleSelectChangeVehicle = (e) => {
                        const selectedVehicleId = e.target.value;
                        const selectedVehicle = vehicles.find((vehicle) => vehicle._id === selectedVehicleId);
                
                        setDataToSend((prevData) => ({
                          ...prevData,
                          vehicledetails: {
                            ...prevData.vehicledetails,
                            vehicleid: selectedVehicle.vehicleid,                    
                            drivername: selectedVehicle.drivername,
                            drivernumber: selectedVehicle.drivernumber,
                            driveraddress: selectedVehicle.driveraddress,
                            driveridproof: selectedVehicle.driveridproof,
                            driverlicenseno: selectedVehicle.driverlicenseno,
                            vehiclenumber: selectedVehicle.vehiclenumber,
                            vehiclemodel: selectedVehicle.vehiclemodel,
                            vehicleofficebranch: selectedVehicle.vehicleofficebranch,
                          },
                        }));
                        setSelectedVehicle(selectedVehicle);
                      };
                      const handleSelectChangeConsignment = (e) => {
                        const selectedConsignmentId = e.target.value;
                        const selectedConsignment = consignments.find(
                          (consignment) => consignment._id === selectedConsignmentId
                        );
                    
                        setDataToSend((prevData) => ({
                          ...prevData,
                          consignmentdetails: {
                            ...prevData.consignmentdetails,
                            itemdetails: prevData.consignmentdetails.itemdetails.map(
                              (item, index) =>
                                index === -1 ? { ...item, ...selectedConsignment } : item
                            )
                          }
                        }));
                    
                        setSelectedConsignment(selectedConsignment);
                      };
                    
            const ConsignmentsAdd = () => {
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: [
                    ...prevData.consignmentdetails.itemdetails,
                    selectedConsignment
                  ]
                }
              }));
              setSelectedConsignment(selectedConsignment);
            };
          
            const ConsignmentsRemove = (index) => {
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: prevData.consignmentdetails.itemdetails.filter(
                    (item, i) => i !== index
                  )
                }
              }));
            };
          
            const handleConsignmentChange = (e, field) => {
              const value = e.target.value;
              setDataToSend((prevData) => ({
                ...prevData,
                consignmentdetails: {
                  ...prevData.consignmentdetails,
                  itemdetails: prevData.consignmentdetails.itemdetails.map(
                    (item, index) => {
                      if (index === 0) {
                        return {
                          ...item,
                          [field]: value
                        };
                      }
                      return item;
                    }
                  )
                }
              }));
            };
            const handleChange = (e, section, field) => {
              const value = e.target.value;
              setDataToSend((prevData) => ({
                ...prevData,
                [section]: {
                  ...prevData[section],
                  [field]: value,
                },
              }));
          }

            const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                  const response = await fetch(`${API}invoice`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                  });
                  if (response.ok) {
                    const data = await response.json();
                    console.log('Invoice created successfully:', data);
                  } else {
                    console.error('Invoice creation failed');
                  }
                } catch (error) {
                  console.error('Error creating invoice:', error);
                }
              }
    return (
        <div 
        style={{
            backgroundImage: `url(${background})`,
            minHeight: '100vh',
        }}
        >
          <AdminNavbar/>
          <h1 className="admin-create-invoice-title">Create Invoice</h1>
      
      <div className="admin-create-invoice-container">
        
        <form className="admin-create-invoice-form" onSubmit={handleSubmit}>
          <div className="invoice-form-section">
            <h3 className="admin-create-invoice-subtitle">Company Details</h3>
            <div className="invoice-form-section-inputs">
              <div className="invoice-form-section-inputs-left">
                <div className="invoice-form-section-inputs-left-input">
                  <select
                  className='admin-create-invoice-select'
                    id="companyid"
                    name="companyid"
                    value={selectedCompany.companyid}
                    onChange={handleSelectChangeCompany}
                  >
                    <option value="">Select Company ID</option>
                    {companies.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.companyname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companyname">Company Name</label>
                  <input
                    id="companyname"
                    name="companyname"
                    type="text"
                    value={selectedCompany.companyname}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companyname")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companyregistrationtype">
                    Company Registration Type
                  </label>
                  <input
                    id="companyregistrationtype"
                    name="companyregistrationtype"
                    type="text"
                    value={selectedCompany.companyregistrationtype}
                    onChange={(e) =>
                      handleChange(
                        e,
                        "companydetails",
                        "companyregistrationtype"
                      )
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companygstno">Company GST No.</label>
                  <input
                    id="companygstno"
                    name="companygstno"
                    type="text"
                    value={selectedCompany.companygstno}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companygstno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companycontact">Company Contact</label>
                  <input
                    id="companycontact"
                    name="companycontact"
                    type="text"
                    value={selectedCompany.companycontact}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companycontact")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companycountry">Company Country</label>
                  <input
                    id="companycountry"
                    name="companycountry"
                    type="text"
                    value={selectedCompany.companycountry}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companycountry")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companystate">Company State</label>
                  <input
                    id="companystate"
                    name="companystate"
                    type="text"
                    value={selectedCompany.companystate}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companystate")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companyofficeaddress">
                    Company Office Address
                  </label>
                  <input
                    id="companyofficeaddress"
                    name="companyofficeaddress"
                    type="text"
                    value={selectedCompany.companyofficeaddress}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companyofficeaddress")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="companypincode">Company Pincode</label>
                  <input
                    id="companypincode"
                    name="companypincode"
                    type="text"
                    value={selectedCompany.companypincode}
                    onChange={(e) =>
                      handleChange(e, "companydetails", "companypincode")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-section-inputs-right">
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellerid">Seller ID</label>
                  <select
                    id="sellerid"
                    name="sellerid"
                    value={selectedSeller.sellerid}
                    onChange={handleSelectChangeSeller}
                  >
                    <option value="">Select Seller ID</option>
                    {sellers.map((seller) => (
                      <option key={seller._id} value={seller._id}>
                        {seller.sellerid}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellercompanyname">Seller Company Name</label>
                  <input
                    id="sellercompanyname"
                    name="sellercompanyname"
                    type="text"
                    value={selectedSeller.sellercompanyname}
                    onChange={(e) =>
                      handleChange(e, "sellerdetails", "sellercompanyname")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellercompanygstno">
                    Seller Company GST No.
                  </label>
                  <input
                    id="sellercompanygstno"
                    name="sellercompanygstno"
                    type="text"
                    value={selectedSeller.sellercompanygstno}
                    onChange={(e) =>
                      handleChange(e, "sellerdetails", "sellercompanygstno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellercompanyaddress">
                    Seller Company Address
                  </label>
                  <input
                    id="sellercompanyaddress"
                    name="sellercompanyaddress"
                    type="text"
                    value={selectedSeller.sellercompanyaddress}
                    onChange={(e) =>
                      handleChange(e, "sellerdetails", "sellercompanyaddress")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellercompanystatename">
                    Seller Company State Name
                  </label>
                  <input
                    id="sellercompanystatename"
                    name="sellercompanystatename"
                    type="text"
                    value={selectedSeller.sellercompanystatename}
                    onChange={(e) =>
                      handleChange(e, "sellerdetails", "sellercompanystatename")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="sellercompanystatecode">
                    Seller Company State Code
                  </label>
                  <input
                    id="sellercompanystatecode"
                    name="sellercompanystatecode"
                    type="text"
                    value={selectedSeller.sellercompanystatecode}
                    onChange={(e) =>
                      handleChange(e, "sellerdetails", "sellercompanystatecode")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-section-inputs-left">
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyerid">Buyer ID</label>
                  <select
                    id="buyerid"
                    name="buyerid"
                    value={selectedBuyer.buyerid}
                    onChange={handleSelectChangeBuyer}
                  >
                    <option value="">Select Buyer ID</option>
                    {buyers.map((buyer) => (
                      <option key={buyer._id} value={buyer._id}>
                        {buyer.buyerid}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyercompanyname">Buyer Company Name</label>
                  <input
                    id="buyercompanyname"
                    name="buyercompanyname"
                    type="text"
                    value={selectedBuyer.buyercompanyname}
                    onChange={(e) =>
                      handleChange(e, "buyerdetails", "buyercompanyname")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyercompanygstno">
                    Buyer Company GST No.
                  </label>
                  <input
                    id="buyercompanygstno"
                    name="buyercompanygstno"
                    type="text"
                    value={selectedBuyer.buyercompanygstno}
                    onChange={(e) =>
                      handleChange(e, "buyerdetails", "buyercompanygstno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyercompanyaddress">
                    Buyer Company Address
                  </label>
                  <input
                    id="buyercompanyaddress"
                    name="buyercompanyaddress"
                    type="text"
                    value={selectedBuyer.buyercompanyaddress}
                    onChange={(e) =>
                      handleChange(e, "buyerdetails", "buyercompanyaddress")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyercompanystatename">
                    Buyer Company State Name
                  </label>
                  <input
                    id="buyercompanystatename"
                    name="buyercompanystatename"
                    type="text"
                    value={selectedBuyer.buyercompanystatename}
                    onChange={(e) =>
                      handleChange(e, "buyerdetails", "buyercompanystatename")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyercompanystatecode">
                    Buyer Company State Code
                  </label>
                  <input
                    id="buyercompanystatecode"
                    name="buyercompanystatecode"
                    type="text"
                    value={selectedBuyer.buyercompanystatecode}
                    onChange={(e) =>
                      handleChange(e, "buyerdetails", "buyercompanystatecode")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-section-inputs-right">
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="vehicleid">Vehicle ID</label>
                  <select
                    id="vehicleid"
                    name="vehicleid"
                    value={selectedVehicle.vehicleid}
                    onChange={handleSelectChangeVehicle}
                  >
                    <option value=''>Select Vehicle ID</option>
                    {vehicles.map((vehicle) => (
                      <option key={vehicle._id} value={vehicle._id}>
                        {vehicle.drivername}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="drivername">Driver Name</label>
                  <input
                    id="drivername"
                    name="drivername"
                    type="text"
                    value={selectedVehicle.drivername}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "drivername")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="drivernumber">Driver Number</label>
                  <input
                    id="drivernumber"
                    name="drivernumber"
                    type="text"
                    value={selectedVehicle.drivernumber}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "drivernumber")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="driveraddress">Driver Address</label>
                  <input
                    id="driveraddress"
                    name="driveraddress"
                    type="text"
                    value={selectedVehicle.driveraddress}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "driveraddress")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="driveridproof">Driver ID Proof</label>
                  <input
                    id="driveridproof"
                    name="driveridproof"
                    type="text"
                    value={selectedVehicle.driveridproof}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "driveridproof")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="driverlicenseno">Driver License No.</label>
                  <input
                    id="driverlicenseno"
                    name="driverlicenseno"
                    type="text"
                    value={selectedVehicle.driverlicenseno}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "driverlicenseno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="vehiclenumber">Vehicle Number</label>
                  <input
                    id="vehiclenumber"
                    name="vehiclenumber"
                    type="text"
                    value={selectedVehicle.vechiclenuumber}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "vehiclenumber")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="vehiclemodel">Vehicle Model</label>
                  <input
                    id="vehiclemodel"
                    name="vehiclemodel"
                    type="text"
                    value={selectedVehicle.vechiclemodel}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "vehiclemodel")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="vehicleofficebranch">
                    Vehicle Office Branch
                  </label>
                  <input
                    id="vehicleofficebranch"
                    name="vehicleofficebranch"
                    type="text"
                    value={selectedVehicle.vechicleofficebranch}
                    onChange={(e) =>
                      handleChange(e, "vehicledetails", "vehicleofficebranch")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-secion">
                <h3 className="invoice-form-section-heading">
                  Consignment Details
                </h3>
                <select
                  id="consignmentid"
                  name="consignmentid"
                  value={selectedConsignment.consignmentid}
                  onChange={handleSelectChangeConsignment}
                >
                  <option value="">Select Consignment ID</option>
                  {consignments.map((consignment) => (
                    <option key={consignment._id} value={consignment._id}>
                      {consignment.itemname}
                    </option>
                  ))}
                </select>

                <table className="admin-create-invoice-table-consigment">
                  <thead className="admin-create-invoice-table-thead">
                    <tr className="admin-create-invoice-table-row-head">
                      <th className="admin-create-invoice-table-row-th">
                        Item Name
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Quantity
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item HSN
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Price
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Item Tax Rate
                      </th>
                      <th className="admin-create-invoice-table-row-th">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="admin-create-invoice-table-tbody">
                    <tr className="admin-create-invoice-table-row-body">
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                        className='admin-create-invoice-table-consigment-input'
                          type="text"
                          disabled
                          value={selectedConsignment.itemname}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemname")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemquantity}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemquantity")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="text"
                          disabled
                          value={selectedConsignment.itemhsn}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemhsn")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemprice}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemprice")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <input
                         className='admin-create-invoice-table-consigment-input'
                          type="number"
                          disabled
                          value={selectedConsignment.itemtaxrate}
                          onChange={(e) =>
                            handleConsignmentChange(e, "itemtaxrate")
                          }
                        />
                      </td>
                      <td className="admin-create-invoice-table-row-body-td">
                        <button type="button" onClick={() => ConsignmentsAdd()}>
                        <img className='admin-create-invoice-table-consigment-icon' src={A} alt='add'/>
                        </button>
                      </td>
                    </tr>

                    {dataToSend.consignmentdetails.itemdetails.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className="admin-create-invoice-table-row-body"
                        >
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemname}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemquantity}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemhsn}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemprice}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            {item.itemtaxrate}
                          </td>
                          <td className="admin-create-invoice-table-consigment-value">
                            <button
                              type="button"
                              onClick={() => ConsignmentsRemove(index)}
                            >
                              <img className='admin-create-invoice-table-consigment-icon-low' src={D} alt='delete'/>
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="invoice-form-section-inputs-left">
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="invoiceno">Invoice No.</label>
                  <input
                    id="invoiceno"
                    name="invoiceno"
                    type="text"
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "invoiceno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="ewaybillno">E-Way Bill No.</label>
                  <input
                    id="ewaybillno"
                    name="ewaybillno"
                    type="text"
                    value={selectedConsignment.ewaybillno}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "ewaybillno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="invoicedate">Invoice Date</label>
                  <input
                    id="invoicedate"
                    name="invoicedate"
                    type="date"
                    value={selectedConsignment.invoicedate}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "invoicedate")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="deliverynote">Delivery Note</label>
                  <input
                    id="deliverynote"
                    name="deliverynote"
                    type="text"
                    value={selectedConsignment.deliverynote}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "deliverynote")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="supplierref">Supplier Ref.</label>
                  <input
                    id="supplierref"
                    name="supplierref"
                    type="text"
                    value={selectedConsignment.supplierref}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "supplierref")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="otherref">Other Ref.</label>
                  <input
                    id="otherref"
                    name="otherref"
                    type="text"
                    value={selectedConsignment.otherref}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "otherref")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="buyersorder">Buyers Order</label>
                  <input
                    id="buyersorder"
                    name="buyersorder"
                    type="text"
                    value={selectedConsignment.buyersorder}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "buyersorder")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="ordereddate">Ordered Date</label>
                  <input
                    id="ordereddate"
                    name="ordereddate"
                    type="date"
                    value={selectedConsignment.ordereddate}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "ordereddate")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="dispatchdocumentno">
                    Dispatch Document No.
                  </label>
                  <input
                    id="dispatchdocumentno"
                    name="dispatchdocumentno"
                    type="text"
                    value={selectedConsignment.dispatchdocumentno}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "dispatchdocumentno")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="deliverynotedate">Delivery Note Date</label>
                  <input
                    id="deliverynotedate"
                    name="deliverynotedate"
                    type="date"
                    value={selectedConsignment.deliverynotedate}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "deliverynotedate")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="dispatchthrough">Dispatch Through</label>
                  <input
                    id="dispatchthrough"
                    name="dispatchthrough"
                    type="text"
                    value={selectedConsignment.dispatchthrough}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "dispatchthrough")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="destination">Destination</label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={selectedConsignment.destination}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "destination")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-right-input">
                  <label htmlFor="termsandcondition">Terms and Condition</label>
                  <input
                    id="termsandcondition"
                    name="termsandcondition"
                    type="text"
                    value={selectedConsignment.termsandcondition}
                    onChange={(e) =>
                      handleChange(e, "invoicedetails", "termsandcondition")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-section-inputs-left">
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="weight">Weight</label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    value={selectedConsignment.weight}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "weight")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="transportationcost">
                    Transportation Cost
                  </label>
                  <input
                    id="transportationcost"
                    name="transportationcost"
                    type="number"
                    value={selectedConsignment.transportationcost}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "transportationcost")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="totalcost">Total Cost</label>
                  <input
                    id="totalcost"
                    name="totalcost"
                    type="number"
                    value={selectedConsignment.totalcost}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "totalcost")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="dateofloading">Date of Loading</label>
                  <input
                    id="dateofloading"
                    name="dateofloading"
                    type="date"
                    value={selectedConsignment.dateofloading}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "dateofloading")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="startingpoint">Starting Point</label>
                  <input
                    id="startingpoint"
                    name="startingpoint"
                    type="text"
                    value={selectedConsignment.startingpoint}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "startingpoint")
                    }
                  />
                </div>
                <div className="invoice-form-section-inputs-left-input">
                  <label htmlFor="endingpoint">Ending Point</label>
                  <input
                    id="endingpoint"
                    name="endingpoint"
                    type="text"
                    value={selectedConsignment.endingpoint}
                    onChange={(e) =>
                      handleChange(e, "boardingdetails", "endingpoint")
                    }
                  />
                </div>
              </div>
              <div className="invoice-form-section-button">
                <button type="submit">Create Invoice</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AdminCreateInvoice;

*/