import React, { useEffect } from "react";
import "./Pagination.css";
function Pagination() {
  let currentPage = 0;
  let totalPages = 10;

  function createPagination(totalPages, page) {
    const liTag = [];
    let beforePage = page - 1;
    let afterPage = page + 1;

    // Add "Prev" button
    if (page > 0) {
      liTag.push({ label: "‹", value: page - 1, type: "btn" });
    }

    // Add "1" button and ellipsis before the current page if necessary
    if (page > 1) {
      liTag.push({ label: 1, value: 0, type: "numb" });
      if (page > 2) {
        liTag.push({ label: "...", type: "dots" });
      }
    }

    // Adjust how many pages are shown before and after the current page
    if (page >= totalPages - 1) {
      beforePage = Math.max(totalPages - 5, 0);
      afterPage = totalPages - 1;
    } else if (page <= 1) {
      beforePage = 0;
      afterPage = Math.min(4, totalPages - 1);
    } else {
      beforePage = Math.max(page - 1, 0);
      afterPage = Math.min(page + 1, totalPages - 1);
    }

    // Add pages before and after the current page
    for (let i = beforePage; i <= afterPage; i++) {
      if (i >= 0 && i < totalPages) {
        liTag.push({
          label: i + 1,
          value: i,
          type: "numb",
          active: page === i,
        });
      }
    }

    // Add ellipsis and last page if necessary
    if (afterPage < totalPages - 2) {
      liTag.push({ label: "...", type: "dots" });
    }

    if (afterPage < totalPages - 1) {
      liTag.push({
        label: totalPages,
        value: totalPages - 1,
        type: "numb",
      });
    }

    // Add "Next" button
    if (page < totalPages - 1) {
      liTag.push({ label: "›", value: page + 1, type: "btn" });
    }

    renderPagination(liTag);
  }

  function renderPagination(pages) {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    pages.forEach((page) => {
      const li = document.createElement("li");
      li.classList.add(page.type === "btn" ? "btn" : "numb");
      if (page.active) {
        li.classList.add("active");
      }

      li.innerHTML = `<span>${page.label}</span>`;
      if (page.type !== "dots") {
        li.addEventListener("click", () => goToPage(page.value));
      }
      paginationContainer.appendChild(li);
    });
  }

  function goToPage(page) {
    currentPage = page;

    createPagination(totalPages, currentPage);
  }
  useEffect(()=>{
    createPagination(totalPages, currentPage);

  },[])
  return(
    <>
        <div className="pagination-controls">
          <ul className="pagination"></ul>
        </div>
    </>
  );
}

export default Pagination;
