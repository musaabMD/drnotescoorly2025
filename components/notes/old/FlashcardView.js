// import React, { useState } from 'react';
// import { Search, Plus, FolderPlus, MoreVertical, Pencil, Trash2 } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const FlashcardDeck = ({ deck }) => {
//   const totalCards = deck.cards?.length || 0;
//   const dueCards = deck.cards?.filter(card => card.isDue)?.length || 0;
//   const newCards = deck.cards?.filter(card => !card.lastReviewed)?.length || 0;

//   return (
//     <Card className="hover:border-blue-200 transition-colors cursor-pointer group">
//       <CardContent className="p-4">
//         <div className="flex justify-between items-start mb-3">
//           <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
//             {deck.name}
//           </h3>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                 <MoreVertical className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <Pencil className="h-4 w-4 mr-2" />
//                 Edit
//               </DropdownMenuItem>
//               <DropdownMenuItem className="text-red-600">
//                 <Trash2 className="h-4 w-4 mr-2" />
//                 Delete
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         <div className="flex items-center gap-4 text-sm">
//           <div>
//             <span className="text-blue-600 font-medium">{dueCards}</span>
//             <span className="text-gray-500 ml-1">Due</span>
//           </div>
//           <div>
//             <span className="text-green-600 font-medium">{newCards}</span>
//             <span className="text-gray-500 ml-1">New</span>
//           </div>
//           <div>
//             <span className="text-gray-900 font-medium">{totalCards}</span>
//             <span className="text-gray-500 ml-1">Total</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const FlashcardView = ({ decks = [] }) => {
//   const [search, setSearch] = useState('');
//   const [showNewDeckModal, setShowNewDeckModal] = useState(false);

//   const filteredDecks = decks.filter(deck =>
//     deck.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
//         <div className="relative flex-1 w-full">
//           <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//           <Input
//             placeholder="Search decks..."
//             className="pl-10"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-3">
//           <Button variant="outline" className="whitespace-nowrap">
//             <Plus className="h-4 w-4 mr-2" />
//             Add Cards
//           </Button>
//           <Button 
//             className="whitespace-nowrap"
//             onClick={() => setShowNewDeckModal(true)}
//           >
//             <FolderPlus className="h-4 w-4 mr-2" />
//             New Deck
//           </Button>
//         </div>
//       </div>

//       {/* Decks Grid */}
//       {filteredDecks.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredDecks.map((deck) => (
//             <FlashcardDeck key={deck.id} deck={deck} />
//           ))}
//         </div>
//       ) : (
//         // Empty State
//         <div className="text-center py-12">
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
//             <FolderPlus className="h-6 w-6" />
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">
//             No Flashcard Decks
//           </h3>
//           <p className="text-gray-500 mb-4">
//             Create your first flashcard deck to start studying
//           </p>
//           <Button 
//             onClick={() => setShowNewDeckModal(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             <FolderPlus className="h-4 w-4 mr-2" />
//             Create New Deck
//           </Button>
//         </div>
//       )}

//       {/* Stats Summary */}
//       {filteredDecks.length > 0 && (
//         <div className="mt-8 pt-6 border-t">
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-blue-50 rounded-lg p-4">
//               <h4 className="text-sm font-medium text-blue-600 mb-1">Total Decks</h4>
//               <p className="text-2xl font-bold text-blue-700">{filteredDecks.length}</p>
//             </div>
//             <div className="bg-green-50 rounded-lg p-4">
//               <h4 className="text-sm font-medium text-green-600 mb-1">Due Today</h4>
//               <p className="text-2xl font-bold text-green-700">
//                 {filteredDecks.reduce((acc, deck) => 
//                   acc + (deck.cards?.filter(card => card.isDue)?.length || 0), 0
//                 )}
//               </p>
//             </div>
//             <div className="bg-purple-50 rounded-lg p-4">
//               <h4 className="text-sm font-medium text-purple-600 mb-1">Total Cards</h4>
//               <p className="text-2xl font-bold text-purple-700">
//                 {filteredDecks.reduce((acc, deck) => 
//                   acc + (deck.cards?.length || 0), 0
//                 )}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlashcardView;