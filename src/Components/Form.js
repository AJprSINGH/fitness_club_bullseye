import React, { useState } from 'react';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [members, setMembers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    setMembers([...members, newMember]);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    alert('User added successfully!');
  };

  return (
    <div>
      <h2>Fitness Club Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Add member</button>
      </form>
    </div>
  );
}

export default Form;
