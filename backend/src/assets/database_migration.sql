CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "User" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_superuser BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    mfa_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Api_Token (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    token TEXT UNIQUE NOT NULL,
    issued_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP(0) WITHOUT TIME ZONE
);

CREATE TABLE OAuth_Account (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL,
    account_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Bill_Status (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    archived BOOLEAN DEFAULT FALSE,
    highlight_color_hex VARCHAR(7)
);

CREATE TABLE Recurrence (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    calculation VARCHAR(20),
    archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE Category (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE Bank_Account (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    url VARCHAR(100),
    recurrence SMALLINT REFERENCES Recurrence(id),
    recurrence_value INTEGER,
    archived BOOLEAN DEFAULT FALSE,
    font_color_hex VARCHAR(7) NOT NULL
);

CREATE TABLE Bills (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    default_amount_due DECIMAL(10,2) NOT NULL,
    url VARCHAR(100),
    archived BOOLEAN DEFAULT FALSE,
    default_draft_account SMALLINT REFERENCES Bank_Account(id),
    category SMALLINT REFERENCES Category(id),
    recurrence SMALLINT REFERENCES Recurrence(id),
    recurrence_value INTEGER
);

CREATE TABLE Due_Bills (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    bill SMALLINT REFERENCES Bills(id),
    recurrence SMALLINT REFERENCES Recurrence(id),
    recurrence_value INTEGER,
    priority INTEGER DEFAULT 0 NOT NULL,
    due_date DATE NOT NULL,
    pay_date DATE,
    min_amount_due DECIMAL(10,2) NOT NULL,
    total_amount_due DECIMAL(10,2) NOT NULL,
    status SMALLINT REFERENCES Bill_Status(id),
    archived BOOLEAN DEFAULT FALSE,
    confirmation VARCHAR(100),
    notes TEXT,
    draft_account SMALLINT REFERENCES Bank_Account(id)
);

CREATE TABLE Bank_Account_Instance (
    id SMALLSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    bank_account SMALLINT REFERENCES Bank_Account(id),
    priority INTEGER DEFAULT 0 NOT NULL,
    due_date DATE NOT NULL,
    pay_date DATE,
    status SMALLINT REFERENCES Bill_Status(id),
    archived BOOLEAN DEFAULT FALSE,
    current_balance DECIMAL(10,2) NOT NULL
);

CREATE TABLE Audit_Log (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    table_name VARCHAR(50) NOT NULL,
    row_id INTEGER NOT NULL,
    field_name VARCHAR(100) NOT NULL,
    action VARCHAR(20) NOT NULL,
    value_before_change TEXT,
    value_after_change TEXT,
    timestamp TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance (optional, but recommended)
CREATE INDEX idx_api_token_user_id ON Api_Token(user_id);
CREATE INDEX idx_oauth_account_user_id ON OAuth_Account(user_id);
CREATE INDEX idx_bill_status_user_id ON Bill_Status(user_id);
CREATE INDEX idx_recurrence_user_id ON Recurrence(user_id);
CREATE INDEX idx_category_user_id ON Category(user_id);
CREATE INDEX idx_bank_account_user_id ON Bank_Account(user_id);
CREATE INDEX idx_bills_user_id ON Bills(user_id);
CREATE INDEX idx_due_bills_user_id ON Due_Bills(user_id);
CREATE INDEX idx_bank_account_instance_user_id ON Bank_Account_Instance(user_id);
CREATE INDEX idx_audit_log_user_id ON Audit_Log(user_id);

-- Unique constraints for names per user (optional, for data integrity)
ALTER TABLE Bill_Status ADD CONSTRAINT uq_bill_status_name_per_user UNIQUE (user_id, name);
ALTER TABLE Recurrence ADD CONSTRAINT uq_recurrence_name_per_user UNIQUE (user_id, name);
ALTER TABLE Category ADD CONSTRAINT uq_category_name_per_user UNIQUE (user_id, name);
ALTER TABLE Bank_Account ADD CONSTRAINT uq_bank_account_name_per_user UNIQUE (user_id, name);
ALTER TABLE Bills ADD CONSTRAINT uq_bills_name_per_user UNIQUE (user_id, name);

-- Timestamps trigger for updated_at (optional)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trigger_update_user_updated_at
BEFORE UPDATE ON "User"
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();