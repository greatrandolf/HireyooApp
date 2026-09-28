/**
 * DashboardScreen.styles.ts
 *
 * Responsive styles for DashboardScreen, built with `rn-responsive-styles`.
 * `CreateResponsiveStyle` takes a base stylesheet plus a map of breakpoint
 * overrides and returns a `useDashboardStyles()` hook that re-resolves
 * whenever the window/device size crosses a breakpoint (phone -> tablet ->
 * web, etc.) — handy since this screen also runs fine via `expo start --web`.
 *
 * Install: npm install rn-responsive-styles
 */

import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';

export const useDashboardStyles = CreateResponsiveStyle(
  // ---- base (mobile-first) styles ----
  {
    safeArea: {
      flex: 1,
      backgroundColor: '#0B0E14',
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 40,
    },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 20,
    },
    greetingLabel: {
      color: '#8A8FA3',
      fontSize: 13,
      marginBottom: 2,
    },
    greetingName: {
      color: '#F5F6FA',
      fontSize: 20,
      fontWeight: '700',
    },
    avatar: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#1E2230',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#2A2F42',
    },
    avatarInitials: {
      color: '#F5F6FA',
      fontWeight: '700',
      fontSize: 15,
    },
    bellButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#1E2230',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    bellDot: {
      position: 'absolute',
      top: 10,
      right: 11,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#FF6B5E',
      borderWidth: 1.5,
      borderColor: '#1E2230',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    // Section headers
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginBottom: 14,
    },
    sectionTitle: {
      color: '#F5F6FA',
      fontSize: 17,
      fontWeight: '700',
    },
    sectionAction: {
      color: '#7C9CFF',
      fontSize: 13,
      fontWeight: '600',
    },

    // Card carousel
    cardCarouselContent: {
      paddingHorizontal: 20,
      paddingBottom: 6,
    },
    cardItem: {
      width: 280,
      height: 172,
      borderRadius: 22,
      padding: 20,
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    cardItemSpacer: {
      width: 14,
    },
    cardTopRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    cardLabel: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: 12,
      letterSpacing: 0.5,
      textTransform: 'uppercase',
    },
    cardNumber: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '600',
      letterSpacing: 2,
      marginTop: 4,
    },
    cardBrand: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '800',
      fontStyle: 'italic',
    },
    cardBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    cardHolderLabel: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 11,
      marginBottom: 2,
    },
    cardHolderName: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: '600',
    },
    cardBalanceLabel: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 11,
      marginBottom: 2,
      textAlign: 'right',
    },
    cardBalanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardBalanceAmount: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'right',
    },
    eyeButton: {
      marginLeft: 8,
      padding: 2,
    },

    dotsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 14,
      marginBottom: 26,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#2A2F42',
      marginHorizontal: 3,
    },
    dotActive: {
      width: 18,
      backgroundColor: '#7C9CFF',
    },

    // Filter chips
    filterRow: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginBottom: 16,
    },
    filterChip: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: '#151926',
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#232838',
    },
    filterChipActive: {
      backgroundColor: '#7C9CFF',
      borderColor: '#7C9CFF',
    },
    filterChipText: {
      color: '#8A8FA3',
      fontSize: 13,
      fontWeight: '600',
    },
    filterChipTextActive: {
      color: '#0B0E14',
    },

    // Transactions
    transactionList: {
      paddingHorizontal: 20,
    },
    transactionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
      borderBottomWidth: 1,
      borderBottomColor: '#161A26',
    },
    transactionIconWrap: {
      width: 44,
      height: 44,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 14,
    },
    transactionInfo: {
      flex: 1,
    },
    transactionMerchant: {
      color: '#F5F6FA',
      fontSize: 15,
      fontWeight: '600',
      marginBottom: 2,
    },
    transactionMeta: {
      color: '#8A8FA3',
      fontSize: 12,
    },
    transactionAmount: {
      fontSize: 15,
      fontWeight: '700',
    },
    transactionAmountPositive: {
      color: '#4ADE80',
    },
    transactionAmountNegative: {
      color: '#F5F6FA',
    },
    transactionExpanded: {
      paddingLeft: 58,
      paddingBottom: 14,
      marginTop: -6,
    },
    transactionExpandedRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    transactionExpandedLabel: {
      color: '#565C70',
      fontSize: 12,
    },
    transactionExpandedValue: {
      color: '#B8BCCC',
      fontSize: 12,
      fontWeight: '600',
    },

    emptyState: {
      alignItems: 'center',
      paddingVertical: 40,
    },
    emptyStateText: {
      color: '#565C70',
      fontSize: 13,
      marginTop: 10,
    },
  },

  // ---- breakpoint overrides ----
  {
    [DEVICE_SIZES.XS]: {
      cardItem: { width: 240, height: 156, padding: 16, borderRadius: 18 },
      cardBalanceAmount: { fontSize: 18 },
      greetingName: { fontSize: 18 },
      sectionTitle: { fontSize: 16 },
    },
    [DEVICE_SIZES.LG]: {
      cardItem: { width: 320, height: 190 },
      header: { paddingHorizontal: 32 },
      sectionHeader: { paddingHorizontal: 32 },
      cardCarouselContent: { paddingHorizontal: 32 },
      filterRow: { paddingHorizontal: 32 },
      transactionList: { paddingHorizontal: 32 },
    },
    [DEVICE_SIZES.XL]: {
      cardItem: { width: 340, height: 200 },
      header: { paddingHorizontal: 48 },
      sectionHeader: { paddingHorizontal: 48 },
      cardCarouselContent: { paddingHorizontal: 48 },
      filterRow: { paddingHorizontal: 48 },
      transactionList: { paddingHorizontal: 48 },
      sectionTitle: { fontSize: 19 },
      greetingName: { fontSize: 22 },
    },
  }
);
