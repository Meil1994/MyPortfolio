<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;


class MessagesController extends Controller
{
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|max:255',
            'message' => 'required|max:1000',
        ]);

        $message = new Message;
        $message->email = $validatedData['email'];
        $message->message = $validatedData['message'];
        $message->save();

        return response()->json(['message' => 'Message sent successfully.']);
    }

}
