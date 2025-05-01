
import Pagination from './Pagination';
import { useState } from 'react';
export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <p>Current Page: {page}</p>
      <Pagination totalPages={5} currentPage={page} onPageChange={setPage} />
    </div>
  );
};
