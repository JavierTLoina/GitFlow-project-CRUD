import React, { useState } from 'react';
import { type User } from './types';
import './App.scss'; 

const initialUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", is_active: true },
  { id: 2, name: "Bob Smith", email: "bob@example.com", is_active: false },
];

let nextId = 3; 

function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '' }); 

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!newUser.name.trim() || !newUser.email.trim()) {
        alert("Por favor, rellena todos los campos.");
        return;
    }
    const userToAdd: User = {
      id: nextId++,
      name: newUser.name.trim(),
      email: newUser.email.trim(),
      is_active: true,
    };
    setUsers([...users, userToAdd]); 
    setNewUser({ name: '', email: '' }); 
  };

  const handleToggleStatus = (id: number) => {
    setUsers(
      users.map((user) => 
        user.id === id ? { ...user, is_active: !user.is_active } : user
      )
    );
  };
  
  const handleDeleteUser = (id: number) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario? ¡Esta acción es permanente!")) {
        setUsers(users.filter((user) => user.id !== id));
    }
  };


  return (
    <div className="container">
      <h1>CRUD de Usuarios con Git Flow (React/TS)</h1>

      {}
      <h2>Añadir Nuevo Usuario</h2>
      <form onSubmit={handleAddUser}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={newUser.name} 
          onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={newUser.email} 
          onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
          required 
        />
        <button type="submit">Crear Usuario</button>
      </form>
      
      <p>Total de usuarios cargados: **{users.length}** registros.</p>

      {/* --- TABLA (R) con Botones (U y D) --- */}
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Email</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.is_active ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button 
                  onClick={() => handleToggleStatus(user.id)}
                  title="Cambia el estado de activo a inactivo y viceversa"
                >
                  {user.is_active ? 'Desactivar' : 'Activar'}
                </button>
                <button 
                  onClick={() => handleDeleteUser(user.id)} 
                  className="delete-button"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ----------------------------- */}

      <p className="read-the-docs">
        La funcionalidad de Borrado (D) ha sido implementada, completando el CRUD.
      </p>
    </div>
  );
}

export default App;