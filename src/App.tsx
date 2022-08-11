import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.ts';
import DealMemo from './DealMemo.tsx';

function App() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <div className="App">
      <h1>Memo Maker</h1>

      <label htmlFor="artist">Artist</label>
      <input type="text" id="artist" placeholder="" required />
      <label htmlFor="">Loan/Out</label>
      <input type="text" id="loanOut" placeholder="" required />
      <label htmlFor="">Role</label>
      <input type="text" id="role" placeholder="" required />
      <label htmlFor="">Project Name</label>
      <input type="text" placeholder="Project Name" required />
      <label htmlFor="">Company</label>
      <input type="text" placeholder="location" required />
      <label htmlFor="">Compensation</label>
      <input type="text" placeholder="verbal" required />
      <input type="number" placeholder="numerical" required />
      <label htmlFor="">Contingency</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Guarantee</label>
      <textarea></textarea>
      <label htmlFor="">Dates</label>
      <input type="date" id="date" placeholder="" required />
      <label htmlFor="">Location</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Payment</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Wire Information</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Work Days</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Post Production Days</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Transportation</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Dressing Room</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Directors Meeting</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Per Diem</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Billing Block</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Approvals</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Merchandising</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Union</label>
      <textarea />
      <label htmlFor="">F&O</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Idemnities</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Special Provisions</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Makeup, Hair, & Wardrobe</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Security Guard</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Personal Assistant</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">Premiere Tickets</label>
      <input type="text" placeholder="" required />
      <label htmlFor="">DVD / Blue-Ray Copy</label>

      <button type="button">Generate Report</button>
    </div>
  );
}

export default App;
