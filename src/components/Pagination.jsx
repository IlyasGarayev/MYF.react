import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePaginationArray } from '../utils/helpers';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  maxVisible = 5,
  showInfo = true 
}) => {
  const { t } = useTranslation();

  if (totalPages <= 1) return null;

  const pages = generatePaginationArray(currentPage, totalPages, maxVisible);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Page Info */}
      {showInfo && (
        <div className="text-sm text-gray-600">
          {t('common.page')} {currentPage} {t('common.of')} {totalPages}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center space-x-1">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-btn ${
            currentPage === 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-festival-green-50 hover:border-festival-green-500'
          }`}
          aria-label={t('common.previous')}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* First Page */}
        {pages[0] > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="pagination-btn"
            >
              1
            </button>
            {pages[0] > 2 && (
              <span className="px-2 py-2 text-gray-500">...</span>
            )}
          </>
        )}

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`pagination-btn ${
              page === currentPage ? 'active' : ''
            }`}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        {/* Last Page */}
        {pages[pages.length - 1] < totalPages && (
          <>
            {pages[pages.length - 1] < totalPages - 1 && (
              <span className="px-2 py-2 text-gray-500">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="pagination-btn"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-btn ${
            currentPage === totalPages 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-festival-green-50 hover:border-festival-green-500'
          }`}
          aria-label={t('common.next')}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;