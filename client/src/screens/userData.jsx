import { useContext, useEffect, useMemo, useState } from "react";
import apiClient from "../config/axios";
// import UserContext from "../context/user.context.jsx";

import HomeIcon from "../components/ui/home-icon.jsx";
import UserIcon from "../components/ui/user-icon.jsx";
import UsersIcon from "@/components/ui/users-icon";
import FileDescriptionIcon from "@/components/ui/file-description-icon";
import StackIcon from "@/components/ui/stack-icon";
import UnorderedListIcon from "@/components/ui/unordered-list-icon";
import MagnifierIcon from "@/components/ui/magnifier-icon";
import TrashIcon from "@/components/ui/trash-icon";
import ClockIcon from "@/components/ui/clock-icon";
import DownChevron from "@/components/ui/down-chevron";
// import { DownloadIcon } from "../components/icons/download-icon";

const UserDetails = () => {
  
  // const { user, signOut } = useContext(UserContext);

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [activeMenu, setActiveMenu] = useState("My Drive");
  const [viewMode, setViewMode] = useState("list");



  const [userModal, setUserModal] = useState("false");

  /*
   * Fetch real files from backend
   */
  useEffect(() => {
    let mounted = true;

    const getFiles = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await apiClient.get("/api/files");

        if (!mounted) return;

        setFiles(data.files || []);
      } catch (err) {
        console.error("Failed to fetch files:", err);

        if (mounted) {
          setError(err.response?.data?.message || "Failed to load files");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    getFiles();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * Search real backend data
   */
  const filteredFiles = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return files;
    }

    return files.filter((file) => file.name?.toLowerCase().includes(query));
  }, [files, search]);

  /*
   * File size formatter
   */
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) {
      return "—";
    }

    const units = ["Bytes", "KB", "MB", "GB", "TB"];

    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, index)).toFixed(index === 0 ? 0 : 1)} ${
      units[index]
    }`;
  };

  /*
   * Date formatter
   */
  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  /*
   * Get file extension
   */
  const getExtension = (file) => {
    if (!file.name) {
      return "";
    }

    const parts = file.name.split(".");

    if (parts.length < 2) {
      return "";
    }

    return parts.at(-1).toLowerCase();
  };

  /*
   * File icon
   */
  const FileIcon = ({ file }) => {
    if (file.type === "folder") {
      return (
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3c4043]">
          <span className="text-xl">📁</span>
        </div>
      );
    }

    const extension = getExtension(file);

    let background = "bg-[#303134]";
    let text = "text-[#bdc1c6]";

    if (extension === "pdf") {
      background = "bg-red-500/10";
      text = "text-red-400";
    }

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) {
      background = "bg-blue-500/10";
      text = "text-blue-400";
    }

    if (["doc", "docx"].includes(extension)) {
      background = "bg-blue-500/10";
      text = "text-blue-400";
    }

    if (["xls", "xlsx", "csv"].includes(extension)) {
      background = "bg-green-500/10";
      text = "text-green-400";
    }

    return (
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${background}`}
      >
        <span className={`text-[10px] font-bold uppercase ${text}`}>
          {extension || "FILE"}
        </span>
      </div>
    );
  };

  /*
   * Navigation
   */
  const navigation = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "My Drive",
      icon: FileDescriptionIcon,
    },
    {
      name: "Shared with me",
      icon: UsersIcon,
    },
    {
      name: "Recent",
      icon: ClockIcon,
    },
    {
      name: "Trash",
      icon: TrashIcon,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#1b1b1b] text-[#e8eaed]">
      <aside className="hidden w-62 shrink-0 border-r border-white/5 bg-[#1b1b1b] md:block">
        <div className="flex h-18 items-center gap-3 px-6">
          <span className="text-[25px] font-medium">File Flow</span>
        </div>
        <div className="px-4 pb-5">
          <button
            type="button"
            className="flex h-14 items-center gap-3 rounded-[18px] bg-[#303134] px-5 text-[15px] font-medium shadow transition hover:bg-[#3c4043]"
          >
            <span className="text-2xl">+</span>
            New
          </button>
        </div>
        <nav className="space-y-1 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active = activeMenu === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveMenu(item.name)}
                className={`flex h-10 w-full items-center gap-4 rounded-full px-4 text-sm transition ${
                  active
                    ? "bg-[#0b568f] text-white"
                    : "text-[#bdc1c6] hover:bg-[#303134]"
                }`}
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Storage */}
        <div className="absolute bottom-5 left-4 w-[205px]">
          <p className="mb-2 text-sm text-[#bdc1c6]">Storage</p>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#3c4043]">
            <div
              className="h-full rounded-full bg-[#8ab4f8]"
              style={{
                width: "0%",
              }}
            />
          </div>

          <p className="mt-2 text-xs text-[#9aa0a6]">Storage information</p>
        </div>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="flex h-18 items-center justify-between gap-4 px-4">
          {/* Search */}
          <div className="flex h-[50px] max-w-[850px] flex-1 items-center rounded-full bg-[#303134] px-5 ">
            <span className="text-xl text-[#bdc1c6]">
              <MagnifierIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search in Drive"
              className="ml-4 min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[#9aa0a6]"
            />
          </div>
          <button
            type="button"
            // onClick={handleLogout}
            // title={user?.email || "Logout"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#303134] transition hover:bg-[#3c4043]"
          >
            <UserIcon size={22} />
          </button>
        </header>

        <section className="min-h-0 flex-1 overflow-hidden rounded-t-[14px] bg-[#121212]">
          <div className="flex h-18 items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] font-normal">{activeMenu}</h1>
              <DownChevron/>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-2 ${
                  viewMode === "list" ? "bg-[#303134]" : ""
                }`}
              >
                <UnorderedListIcon />
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-lg p-2 ${
                  viewMode === "grid" ? "bg-[#303134]" : ""
                }`}
              >
                <StackIcon />
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mx-6 mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex h-[300px] items-center justify-center text-sm text-[#9aa0a6]">
              Loading files...
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filteredFiles.length === 0 && (
            <div className="flex h-[300px] flex-col items-center justify-center text-center">
              <div className="mb-4 text-4xl">📂</div>

              <h2 className="text-lg font-medium">
                {search ? "No files found" : "No files yet"}
              </h2>

              <p className="mt-2 text-sm text-[#9aa0a6]">
                {search
                  ? "Try a different search."
                  : "Upload a file to see it here."}
              </p>
            </div>
          )}

          {!loading && filteredFiles.length > 0 && viewMode === "list" && (
            <div className="h-full overflow-auto px-5">
              {/* Table header */}
              <div className="sticky top-0 z-10 grid grid-cols-[minmax(280px,1fr)_180px_180px_120px_45px] border-b border-[#303134] bg-[#121212] px-4 py-3 text-xs text-[#9aa0a6]">
                <div>Name</div>

                <div>Owner</div>

                <div>Date modified</div>

                <div>File size</div>

                <div />
              </div>

              {filteredFiles.map((file) => (
                <div
                  key={file._id}
                  className="grid grid-cols-[minmax(280px,1fr)_180px_180px_120px_45px] items-center border-b border-[#242424] px-4 py-3 transition hover:bg-[#202124]"
                >
                  {/* Name */}
                  <div className="flex min-w-0 items-center gap-4">
                    <FileIcon file={file} />

                    <span className="truncate text-sm">{file.name}</span>
                  </div>

                  {/* Owner */}
                  <div className="truncate text-sm text-[#bdc1c6]">
                    {file.owner?.userName || file.owner?.email || "me"}
                  </div>

                  {/* Date */}
                  <div className="text-sm text-[#bdc1c6]">
                    {formatDate(file.updatedAt)}
                  </div>

                  {/* Size */}
                  <div className="text-sm text-[#bdc1c6]">
                    {formatFileSize(file.size)}
                  </div>

                  {/* More */}
                  <button
                    type="button"
                    className="rounded-full p-2 text-[#9aa0a6] hover:bg-[#303134]"
                  >
                    ⋮
                  </button>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredFiles.length > 0 && viewMode === "grid" && (
            <div className="grid grid-cols-2 gap-4 overflow-auto p-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredFiles.map((file) => (
                <div
                  key={file._id}
                  className="group rounded-xl border border-[#303134] bg-[#1b1b1b] p-4 transition hover:bg-[#242424]"
                >
                  <div className="flex h-28 items-center justify-center rounded-lg bg-[#202124]">
                    <FileIcon file={file} />
                  </div>

                  <div className="mt-4 min-w-0">
                    <p className="truncate text-sm">{file.name}</p>

                    <p className="mt-1 text-xs text-[#9aa0a6]">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserDetails;
