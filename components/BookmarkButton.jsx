'use client';
import { useState, useEffect } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import bookmarkProperty from '@/app/actions/bookmarkProperty';
import { toast } from 'react-toastify';

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    //@todo: Run action to check if property is bookmarked
    setLoading(false);
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to sign in to bookmark a property');
      return;
    }

    try {
      const res = await bookmarkProperty(property._id);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      console.error('Error bookmarking property:', error);
      toast.error('Failed to bookmark property');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className='text-center'>Loading...</p>;

  return (
    <button
      onClick={handleClick}
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
      <FaBookmark className='mr-2' />
      Bookmark Property
    </button>
  );
};
export default BookmarkButton;
