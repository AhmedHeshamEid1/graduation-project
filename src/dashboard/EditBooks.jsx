import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
}from "flowbite-react";

function EditBooks() {
  const{id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const from = event.target;

    const bookTitle = from.bookTitle.value;
    const authorName = from.authorName.value;
    const imageURL = from.imageURL.value;
    const category = from.categoryName.value;
    const bookDescription = from.bookDescription.value;
    const bookPdfUrl = from.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    };

    //console.log(bookObj);

    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Tyep": "application/json"
      },
      body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data =>{
        alert("Book is update successfuly!!!")
      })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              defaultValue={bookTitle}
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            className="w-full"
            rows={6}
            defaultValue={bookDescription}
          />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="book Pdf Url"
            required
            defaultValue={bookPdfUrl}
          />
        </div>

        <Button type="submit" className="mt-5 bg-teal-500">
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks