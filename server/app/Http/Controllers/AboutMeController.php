<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\AboutMe;

class AboutMeController extends Controller
{
    public function index()
    {
        $achievements = AboutMe::all();

        return response()->json($achievements);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $achievement = new AboutMe([
            'title' => $request->get('title'),
            'content' => $request->get('content'),
            'links' => $request->get('links'),
            'images' => $request->get('images'),
        ]);

        $achievement->save();

        return response()->json($achievement);
    }

    public function edit($id)
    {
        $achievement = AboutMe::find($id);

        return view('achievements.edit', compact('achievement'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $achievement = AboutMe::find($id);
        $achievement->title = $request->get('title');
        $achievement->content = $request->get('content');
        $achievement->links = $request->get('links');
        $achievement->images = $request->get('images');
        $achievement->save();

        return response()->json($achievement);
    }

    public function destroy($id)
    {
        $achievement = AboutMe::find($id);
        $achievement->delete();

        return response()->json($achievement);
    }
}
