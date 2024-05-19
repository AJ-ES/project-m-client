import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import copy from "clipboard-copy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminInvoiceAccordion = ({ invoice, code, pdfUrl, preSignedUrl}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API;
  const API2 = process.env.REACT_APP_URL;
	const hours = process.env.REACT_APP_TIME;


  const selectedInvoiceId = invoice;
  const selectedCode = code;
  const selectedPdfUrl = pdfUrl;
  const selectedPreSignedUrll = preSignedUrl;
  const [shortenedUrl, setShortenedUrl] = useState("");
  // console.log(selectedPdfUrl);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const pdfUrlOriginal = `${API}download/${selectedInvoiceId}`;
  const ViewURLOriginal = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrlOriginal
  )}&embedded=true`;

  // const shareUrl = `${API}web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  // const pdfUrl = `${selectedInvoiceId}`;

  // const handleOriginalInvoice = () => {
  // 	const expirationTimestamp = Date.now() + 5 * 24 * 60 * 60 * 1000;
  // 	const id = selectedInvoiceId;
  // 	console.log(`${API}/download/${id}`);
  // 	const pdfUrl = `${id}/${expirationTimestamp}`;
  // 	// Assuming 'navigate' is a function for navigating in your application
  // 	// You may need to replace it with the appropriate navigation logic
  // 	navigate(`/pdf/${pdfUrl}`);
  // 	console.log('Handling Original Invoice');
  // };

  const handleView = () => {
    if (isMobile) {
      const newWindow = window.open();
      const newIframe = newWindow.document.createElement("iframe");
      newIframe.src = `https://docs.google.com/viewer?url=${selectedPdfUrl}&embedded=true&toolbar=0`;
      newIframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
      newIframe.style.width = "100%";
      newIframe.style.height = "100%";
      newWindow.document.body.appendChild(newIframe);
    }
    if (!isMobile) {
      window.open(selectedPdfUrl);
    }
  };

  // const handleInvoiceDownload = () => {
  // 	// window.location = `${API}download/${selectedInvoiceId}`;
  // };

  const handleOriginalCopy = async () => {
    try {
      const apiKey = encodeURIComponent("XbkITEAnyMt1eTIdzgGR3g==");
      const csrfToken = encodeURIComponent(
        "LycbKjY-bS4sAnpDExpRbAUXEW0YM2I3AIXOr_XDJk5npn76fox8Qp4D"
      );
      const workspaceId = 198961;
      const requestData = {
        url: preSignedUrl,
        workspace_id: workspaceId,
        expiry_datetime: new Date(
          Date.now() + hours * 60 * 60 * 1000
        ).toISOString(), // 6 hours from now
      };

      const options = {
        method: "POST",
        url: `https://app.linklyhq.com/api/v1/link?api_key=${apiKey}`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        data: requestData,
      };

      const Response = await axios.request(options);
      const shortenedUrl = Response.data.full_url;
      // Copy the shortened URL
      copy(shortenedUrl);
      toast.success("Shortened link copied to clipboard!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error generating or copying the shortened link.");
    }
  };

  const handleCodeCopy = () => {
    const code = selectedCode;
    const linkToCopy = `${code}`;
    try {
      copy(linkToCopy);
      // alert('Code copied to clipboard!');
      toast.success("Code copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard.", error);
      // alert('Error copying to clipboard. Please try again.');
      toast.error("Error copying to clipboard. Please try again.");
    }
  };

  const handleDelete = () => {
    // console.log('delete');
    const confirmDelete = window.confirm(
      "Are you sure, you want to Delete Invoice?\n\nNote: Once deleted can't be recovered..."
    );

    if (confirmDelete) {
      if (confirmDelete) {
        axios
          .delete(`${API}invoice/${selectedInvoiceId}`)
          .then((response) => {
            toast.success("Invoice deleted successfully");
            setTimeout(() => {
              // Reload the page after successful deletion
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            console.error("Error deleting invoice:", error);
            toast.error("Error deleting invoice. Please try again.");
          });
        // console.log('deleted');
      }
    }
  };
  const handleEdit = () => {
    navigate(`/admineditinv/${selectedInvoiceId}`);
  }
  const handleCopy2 = async () => {
    try {
      // Encode the selectedInvoiceId to base64
      const encodedUrl = btoa(selectedInvoiceId);
    
      // Construct the original URL with the encoded selectedInvoiceId
      const originalUrl = `${API2}${encodedUrl}`;
    
      // Generate the short URL
      const shortUrl = await generateShortUrl(originalUrl);
    
      // Copy the short URL
      copy(shortUrl);
    
      // Show success message
      toast.success("Shortened link copied to clipboard!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error copying the shortened link.");
    }
  };
  

  const generateShortUrl = async (originalUrl) => {
    try {
      const apiKey = encodeURIComponent("XbkITEAnyMt1eTIdzgGR3g==");
      const csrfToken = encodeURIComponent(
        "LycbKjY-bS4sAnpDExpRbAUXEW0YM2I3AIXOr_XDJk5npn76fox8Qp4D"
      );
      const workspaceId = 198961;
      const requestData = {
        url: originalUrl,
        workspace_id: workspaceId,
        expiry_datetime: new Date(
          Date.now() + hours * 60 * 60 * 1000 // 30 minutes from now
        ).toISOString(),
      };
  
      const options = {
        method: "POST",
        url: `https://app.linklyhq.com/api/v1/link?api_key=${apiKey}`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        data: requestData,
      };
  
      const response = await axios.request(options);
      return response.data.full_url;
    } catch (error) {
      console.error("Error generating short URL:", error);
      throw error;
    }
  };
  const handleView2 = () => {
    const encodedUrl = btoa(selectedInvoiceId);
      const originalUrl = `${API2}${encodedUrl}`;
    window.open(originalUrl);
  }
  return (
    <div>
      <div>
        <button
          onClick={toggleAccordion}
          className="invoice-management-data-body-table-data-button"
        >
          ...
          {isAccordionOpen && (
            <div className="accordion-popover">
              <div className="modal-btn-div-pdf-inv">
                <button
                  type="button"
                  className="modal-btn-inv"
                  onClick={handleView}
                >
                  View Invoice
                </button>
                {/* <button className='modal-btn-inv' onClick={handleInvoiceDownload}>
								Download
							</button> */}
                <button className="modal-btn-inv" onClick={handleOriginalCopy}>
                  Copy Link
                </button>
                <button className="modal-btn-inv" onClick={handleCodeCopy}>
                  Copy Code
                </button>
                <button className="modal-btn-inv" onClick={handleDelete}>
                  Delete
                </button>
                <button className="modal-btn-inv" onClick={handleEdit}>
                  Edit
                </button>
                <button className="modal-btn-inv" onClick={handleCopy2}>
                  Copy Link 2
                </button>
                <button className="modal-btn-inv" onClick={handleView2}>
                  View Invoice 2
                </button>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdminInvoiceAccordion;
