--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Homebrew)
-- Dumped by pg_dump version 14.10 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: dummy
--

CREATE TABLE public.users (
    username character varying(44),
    firstname character varying(48),
    lastname character varying(55),
    user_id integer NOT NULL
);


ALTER TABLE public.users OWNER TO dummy;

--
-- Name: users_users_idx_seq; Type: SEQUENCE; Schema: public; Owner: dummy
--

CREATE SEQUENCE public.users_users_idx_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_users_idx_seq OWNER TO dummy;

--
-- Name: users_users_idx_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dummy
--

ALTER SEQUENCE public.users_users_idx_seq OWNED BY public.users.user_id;


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: dummy
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_users_idx_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dummy
--

COPY public.users (username, firstname, lastname, user_id) FROM stdin;
\.


--
-- Name: users_users_idx_seq; Type: SEQUENCE SET; Schema: public; Owner: dummy
--

SELECT pg_catalog.setval('public.users_users_idx_seq', 25, true);


--
-- Name: users username_uniq; Type: CONSTRAINT; Schema: public; Owner: dummy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT username_uniq UNIQUE (username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: dummy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

