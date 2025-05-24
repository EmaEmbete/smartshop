import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Utilisateur from "./pages/utilisateur";
import Index from "./pages/index";
import Produit from "./pages/produits";
import ProduitForm from "./pages/essaie_react_yup_bs";
import Commande from "./pages/commandes";
import Detailcommande from "./pages/detailcommande";
import Approvisionnement from "./pages/approvi";
import Detailappro from "./pages/detailapprovi";
import Fournisseur from "./pages/fournisseur";
import PageCommande from './pages/commandeclient';
import Login from './pages/login';
import Affichercommandeclient from './pages/affichercommandeclient';
import Afficherclient from './pages/afficherclient';
import Afficherproduit from './pages/afficherproduit';
import Navbar from './composants/navbar';
import Footers from './composants/footer';
import Layout from './composants/layout';
import Afficherpaie from './pages/afficherpaie';
import Validercommande from './pages/ValiderCommande';
import Voirdetailcommande from './pages/Afficherdetailcommande';
import AfficherCommandeValide from './pages/affichercommandeValider';

function App(){
  return (

    <div>
      <BrowserRouter>
        <Layout>
          <div style={{minHeight: "55vh"}}>
            <Routes>
              <Route index path="/" element={<Index/>}/>
              <Route path="/clients" element={<Utilisateur/>}/>
              <Route path="/produits" element={<Produit/>}/>
              <Route path="/prods" element={<Produit/>}/>
              <Route path="/essaie" element={<ProduitForm/>}/>
              <Route path="/cmds" element={<Commande/>}/>
              <Route path="/detailcmds" element={<Detailcommande/>}/>
              <Route path="/approvis" element={<Approvisionnement/>}/>
              <Route path="/detailappro" element={<Detailappro/>}/>
              <Route path="/fss" element={<Fournisseur/>}/>
              <Route path="/pagecmds" element={<PageCommande/>}/>
              <Route path="/logs" element={<Login/>}/>
              <Route path="/affichercmds" element={<Affichercommandeclient/>}/>
              <Route path="/affichercls" element={<Afficherclient/>}/>
              <Route path="/afficherprods" element={<Afficherproduit/>}/>
              <Route path="/navbars" element={<Navbar/>}/>
              <Route path="/footers" element={<Footers/>}/>
              <Route path="/paies" element={<Afficherpaie/>}/>
              <Route path="/validation" element={<Validercommande/>}/>
              <Route path="/details/:id" element={<Voirdetailcommande/>}/>
              <Route path="/cmdsvalider" element={<AfficherCommandeValide/>}/>

            </Routes>
            </div>
          </Layout>
      </BrowserRouter>
    </div>

  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Utilisateur from "./pages/utilisateur";
// import Index from "./pages/index";
// import Produit from "./pages/produits";
// import ProduitForm from "./pages/essaie_react_yup_bs";
// import Commande from "./pages/commandes";
// import Detailcommande from "./pages/detailcommande";
// import Approvisionnement from "./pages/approvi";
// import Detailappro from "./pages/detailapprovi";
// import Fournisseur from "./pages/fournisseur";
// import PageCommande from './pages/commandeclient';
// import Login from './pages/login';
// import Affichercommandeclient from './pages/affichercommandeclient';
// import Afficherclient from './pages/afficherclient';
// import Afficherproduit from './pages/afficherproduit';
// import Navbar from './composants/navbar';
// import Footers from './composants/footer';
// import Layout from './composants/layout';
// import Afficherpaie from './pages/afficherpaie';
// import Validercommande from './pages/ValiderCommande';
// import Voirdetailcommande from './pages/Afficherdetailcommande';
// import ProtectedRoute from './composants/protectedRouter';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <div style={{ minHeight: "55vh" }}>
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<Index />} />
//             <Route path="/logs" element={<Login />} />
//             <Route path="/clients" element={<Utilisateur />} />

//             {/* Protected routes */}
//             <Route path="/produits" element={<ProtectedRoute><Produit /></ProtectedRoute>} />
//             <Route path="/prods" element={<ProtectedRoute><Produit /></ProtectedRoute>} />
//             <Route path="/essaie" element={<ProtectedRoute><ProduitForm /></ProtectedRoute>} />
//             <Route path="/cmds" element={<ProtectedRoute><Commande /></ProtectedRoute>} />
//             <Route path="/detailcmds" element={<ProtectedRoute><Detailcommande /></ProtectedRoute>} />
//             <Route path="/approvis" element={<ProtectedRoute><Approvisionnement /></ProtectedRoute>} />
//             <Route path="/detailappro" element={<ProtectedRoute><Detailappro /></ProtectedRoute>} />
//             <Route path="/fss" element={<ProtectedRoute><Fournisseur /></ProtectedRoute>} />
//             <Route path="/pagecmds" element={<ProtectedRoute><PageCommande /></ProtectedRoute>} />
//             <Route path="/affichercmds" element={<ProtectedRoute><Affichercommandeclient /></ProtectedRoute>} />
//             <Route path="/affichercls" element={<ProtectedRoute><Afficherclient /></ProtectedRoute>} />
//             <Route path="/afficherprods" element={<ProtectedRoute><Afficherproduit /></ProtectedRoute>} />
//             <Route path="/navbars" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
//             <Route path="/footers" element={<ProtectedRoute><Footers /></ProtectedRoute>} />
//             <Route path="/paies" element={<ProtectedRoute><Afficherpaie /></ProtectedRoute>} />
//             <Route path="/validation" element={<ProtectedRoute><Validercommande /></ProtectedRoute>} />
//             <Route path="/details/:id" element={<ProtectedRoute><Voirdetailcommande /></ProtectedRoute>} />

//             {/* Redirect unknown routes */}
//             <Route path="*" element={<Navigate to="/logs" replace />} />
//           </Routes>
//         </div>
//       </Layout>
//     </Router>
//   );
// }

//export default App;
