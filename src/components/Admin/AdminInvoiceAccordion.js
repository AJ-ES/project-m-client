import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import copy from "clipboard-copy";
import "./AdminInvoiceManager.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component for managing admin invoices
const AdminInvoiceAccordion = ({ invoice, code, pdfUrl, preSignedUrl }) => {
 // State to manage the accordion open/close status
 const [isAccordionOpen, setAccordionOpen] = useState(false);
 // Hook for navigation within the app
 const navigate = useNavigate();
 // Environment variables for API endpoints and time
 const API = process.env.REACT_APP_API;
 const API2 = process.env.REACT_APP_URL;
 const hours = process.env.REACT_APP_TIME;

 // Selected invoice details
 const selectedInvoiceId = invoice;
 const selectedCode = code;
 const selectedPdfUrl = pdfUrl;
 const selectedPreSignedUrll = preSignedUrl;
 const [shortenedUrl, setShortenedUrl] = useState("");
 // Check if the user is on a mobile device
 const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

 // Original PDF URL for viewing
 const pdfUrlOriginal = `${API}download/${selectedInvoiceId}`;
 const ViewURLOriginal = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrlOriginal
 )}&embedded=true`;

 // Function to toggle the accordion open/close status
 const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
 };

 // Function to handle viewing the invoice
 const handleView = () => {
    // Open in a new window for mobile devices
    if (isMobile) {
      const newWindow = window.open();
      const newIframe = newWindow.document.createElement("iframe");
      newIframe.src = `https://docs.google.com/viewer?url=${selectedPdfUrl}&embedded=true&toolbar=0`;
      newIframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
      newIframe.style.width = "100%";
      newIframe.style.height = "100%";
      newWindow.document.body.appendChild(newIframe);
    }
    // Open in a new tab for non-mobile devices
    if (!isMobile) {
      window.open(selectedPdfUrl);
    }
 };

 // Function to copy the original invoice link
 const handleOriginalCopy = async () => {
    try {
      // API request to shorten the URL
      const Response = await axios.request({
        method: "POST",
        url: `https://app.linklyhq.com/api/v1/link?api_key=${apiKey}`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        data: {
          url: preSignedUrl,
          workspace_id: workspaceId,
          expiry_datetime: new Date(
            Date.now() + hours * 60 * 60 * 1000
          ).toISOString(), // assgined hours from now default is 24 at present
        },
      });
      const shortenedUrl = Response.data.full_url;
      // Copy the shortened URL to clipboard
      copy(shortenedUrl);
      toast.success("Shortened link copied to clipboard!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error generating or copying the shortened link.");
    }
 };

 // Function to copy the invoice code
 const handleCodeCopy = () => {
    const code = selectedCode;
    const linkToCopy = `${code}`;
    try {
      copy(linkToCopy);
      toast.success("Code copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard.", error);
      toast.error("Error copying to clipboard. Please try again.");
    }
 };

 // Function to delete the invoice
 const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure, you want to Delete Invoice?\n\nNote: Once deleted can't be recovered..."
    );

    if (confirmDelete) {
      axios
        .delete(`${API}invoice/${selectedInvoiceId}`)
        .then((response) => {
          toast.success("Invoice deleted successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error("Error deleting invoice:", error);
          toast.error("Error deleting invoice. Please try again.");
        });
    }
 };

 // Function to navigate to the edit invoice page
 const handleEdit = () => {
    navigate(`/admineditinv/${selectedInvoiceId}`);
 }

 // Function to copy a shortened link using a different method
 const handleCopy2 = async () => {
    try {
      const encodedUrl = btoa(selectedInvoiceId);
      const originalUrl = `${API2}${encodedUrl}`;
      const shortUrl = await generateShortUrl(originalUrl);
      copy(shortUrl);
      toast.success("Shortened link copied to clipboard!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error copying the shortened link.");
    }
 };

 // Function to generate a short URL
 const generateShortUrl = async (originalUrl) => {
    try {
      const response = await axios.request({
        method: "POST",
        url: `https://app.linklyhq.com/api/v1/link?api_key=${apiKey}`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        data: {
          url: originalUrl,
          workspace_id: workspaceId,
          expiry_datetime: new Date(
            Date.now() + hours * 60 * 60 * 1000 // assigned minutes from now default is 24 at present
          ).toISOString(),
        },
      });
      return response.data.full_url;
    } catch (error) {
      console.error("Error generating short URL:", error);
      throw error;
    }
 };

 // Function to view the invoice using a different method
 const handleView2 = () => {
    const encodedUrl = btoa(selectedInvoiceId);
    const originalUrl = `${API2}${encodedUrl}`;
    window.open(originalUrl);
 }

 return (
    <div>
      <div>
        {/* Button to toggle the accordion */}
        <button
          onClick={toggleAccordion}
          className="invoice-management-data-body-table-data-button"
        >
          ...
          {isAccordionOpen && (
            <div className="accordion-popover">
              <div className="modal-btn-div-pdf-inv">
                {/* Button to view the invoice */}
                <button
                 type="button"
                 className="modal-btn-inv"
                 onClick={handleView}
                >
                 View Invoice
                </button>
                {/* Button to copy the original invoice link */}
                <button className="modal-btn-inv" onClick={handleOriginalCopy}>
                 Copy Link
                </button>
                {/* Button to copy the invoice code */}
                <button className="modal-btn-inv" onClick={handleCodeCopy}>
                 Copy Code
                </button>
                {/* Button to delete the invoice */}
                <button className="modal-btn-inv" onClick={handleDelete}>
                 Delete
                </button>
                {/* Button to edit the invoice */}
                <button className="modal-btn-inv" onClick={handleEdit}>
                 Edit
                </button>
                {/* Button to copy a shortened link using a different method */}
                <button className="modal-btn-inv" onClick={handleCopy2}>
                 Copy Link 2
                </button>
                {/* Button to view the invoice using a different method */}
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
